<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoSixteenPersonalityType extends Model
{
    use HasFactory;

    protected $fillable = ['type'];

    /**
     * Get the sixteen personalities associated with the type.
     */
    public function sixteenPersonalities()
    {
        return $this->hasMany(SixteenPersonality::class, 'type_id');
    }
}