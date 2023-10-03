<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SixteenPersonalityTypesTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['type' => 'INTJ', 'type_ja' => '大学教授', 'description' => '説明1'],
            // 他のタイプのデータも同様に追加
        ];

        DB::table('info_sixteen_personality_types')->insert($data);
    }
}