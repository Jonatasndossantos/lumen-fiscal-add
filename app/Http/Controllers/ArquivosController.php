<?php

namespace App\Http\Controllers;

use App\Models\Arquivos;
use App\Http\Requests\StoreArquivosRequest;
use App\Http\Requests\UpdateArquivosRequest;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ArquivosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Arquivos/Index', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArquivosRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Arquivos $arquivos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Arquivos $arquivos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArquivosRequest $request, Arquivos $arquivos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Arquivos $arquivos)
    {
        //
    }
}
