<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Arquivos extends Model
{
    /** @use HasFactory<\Database\Factories\ArquivosFactory> */
    use HasFactory, SoftDeletes;

    protected $primaryKey = 'id';
    
    protected $fillable = [
        'titulo',
        'linkArquivo',
        'user_id',
    ];

    // Remover ou comentar esta linha para permitir que o Laravel gerencie os timestamps
    // public $timestamps = false;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
