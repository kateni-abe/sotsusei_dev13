<?php

namespace Database\Factories;

use App\Models\Chronotype;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChronotypeFactory extends Factory
{
    protected $model = Chronotype::class;

    public function definition()
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'type' => $this->faker->word,
        ];
    }
}