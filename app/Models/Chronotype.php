<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chronotype extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'user_id'];

    /**
     * Get the user that owns the Chronotype.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}