<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            ProfilesTableSeeder::class,
            ChronotypesTableSeeder::class,
            SixteenPersonalitiesTableSeeder::class,
            FriendshipsTableSeeder::class,
        ]);
    }
}