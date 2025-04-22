<?php

namespace App\Http\Controllers;

use App\Models\Fiscal;
use App\Http\Requests\StoreFiscalRequest;
use App\Http\Requests\UpdateFiscalRequest;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class FiscalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Fiscal/Index', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Fiscal/Create', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFiscalRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Fiscal $fiscal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fiscal $fiscal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFiscalRequest $request, Fiscal $fiscal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fiscal $fiscal)
    {
        //
    }
}
