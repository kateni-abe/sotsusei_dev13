<?php

namespace Database\Factories;

use App\Models\InfoSixteenPersonalityType;
use Illuminate\Database\Eloquent\Factories\Factory;

class InfoSixteenPersonalityTypeFactory extends Factory
{
    protected $model = InfoSixteenPersonalityType::class;

    public function definition()
    {
        return [
            'type' => $this->faker->word,
            'description' => $this->faker->sentence,
        ];
    }
}