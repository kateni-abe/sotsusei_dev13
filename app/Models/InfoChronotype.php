<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoChronotype extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'chronotype_id'];

    /**
     * Get the chronotype that owns the InfoChronotype.
     */
    public function chronotype()
    {
        return $this->belongsTo(Chronotype::class);
    }
}