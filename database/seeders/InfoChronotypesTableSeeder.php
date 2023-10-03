<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InfoChronotypesTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['type' => 'Type1', 'description' => 'Description1'],
            
        ];

        DB::table('info_chronotypes')->insert($data);
    }
}