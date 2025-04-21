<?php

use App\Http\Controllers\ProfileController; 
use App\Http\Controllers\ArquivosController; 

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use Laravel\Socialite\Facades\Socialite;

use App\Models\User;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    
    Route::resource('/arquivos', ArquivosController::class);
});






Route::get('/auth/{provider}/redirect', function ($provider) {
    
    return Socialite::driver($provider)->redirect();
})->name('socialite.redirect');

//google and git
Route::get('/auth/{provider}/callback', function ($provider) {
    
        $socialiteUser = Socialite::driver($provider)->stateless()->user();
        
        // Verifica se o email existe
        if (!$socialiteUser->email) {
            return redirect('/login')->with('error', 'Email não fornecido pelo provedor social');
        }

        // Busca ou cria o usuário
        $user = User::updateOrCreate(
            ['email' => $socialiteUser->email],
            [
                'name' => $socialiteUser->name,
                'password' => Hash::make(Str::random(24)),                
                'role' =>'user',                
                'created_at' => now(),
                $provider.'_id' => $socialiteUser->id,
            ]
        );

        // Faz login do usuário
        Auth::login($user);
        
        return redirect(route('dashboard', absolute: false));
       
})->name('socialite.callback');

require __DIR__.'/auth.php';
