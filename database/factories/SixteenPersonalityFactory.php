<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\InfoSixteenPersonalityType;
use App\Models\SixteenPersonality;
use Illuminate\Database\Eloquent\Factories\Factory;

class SixteenPersonalityFactory extends Factory
{
    protected $model = SixteenPersonality::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'type' => $this->faker->word,
            'info_sixteen_personality_type_id' => InfoSixteenPersonalityType::factory(),
        ];
    }
}