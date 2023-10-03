<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SixteenPersonality extends Model
{
    use HasFactory;

    protected $fillable = ['type_id'];

    /**
     * Get the user that owns the personality.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the type associated with the personality.
     */
    public function type()
    {
        return $this->belongsTo(InfoSixteenPersonalityType::class, 'type_id');
    }
}