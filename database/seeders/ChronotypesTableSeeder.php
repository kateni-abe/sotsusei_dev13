<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChronotypesTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['user_id' => 1, 'type' => 'Type1'],
            // 他のユーザーのクロノタイプデータも同様に追加
        ];

        DB::table('chronotypes')->insert($data);
    }
}