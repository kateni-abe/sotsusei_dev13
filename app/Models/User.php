<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sixteenPersonalities()
    {
        return $this->hasOne(SixteenPersonality::class);
    }

    public function chronotype()
    {
        return $this->hasOne(Chronotype::class);
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);  // Profileとのリレーションを追加
    }

    public function befriend(User $user)
    {
        if ($this->friends->contains($user)) {
            return false;
        }

        $this->friends()->attach($user->id);
        return true;
    }

    public function friends()
    {
        return $this->belongsToMany(User::class, 'friendships', 'user_id', 'friend_id')
            ->withTimestamps();
    }
}