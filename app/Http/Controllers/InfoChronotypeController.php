<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoChronotypeController extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'description'];
}