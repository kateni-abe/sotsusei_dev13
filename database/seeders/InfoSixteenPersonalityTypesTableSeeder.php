<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InfoSixteenPersonalityTypesTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['type' => 'INTJ', 'type_ja' => '大学教授', 'description' => '説明1'],
            ['type' => 'INTP', 'type_ja' => '哲学者', 'description' => '説明2'],
            ['type' => 'ENTJ', 'type_ja' => '経営者', 'description' => '説明3'],
            ['type' => 'ENTP', 'type_ja' => '発明家', 'description' => '説明4'],
            ['type' => 'INFJ', 'type_ja' => '心理カウンセラー', 'description' => '説明5'],
            ['type' => 'INFP', 'type_ja' => '作家', 'description' => '説明6'],
            ['type' => 'ENFJ', 'type_ja' => '教育者', 'description' => '説明7'],
            ['type' => 'ENFP', 'type_ja' => 'ジャーナリスト', 'description' => '説明8'],
            ['type' => 'ISTJ', 'type_ja' => '公務員', 'description' => '説明9'],
            ['type' => 'ISFJ', 'type_ja' => '看護師', 'description' => '説明10'],
            ['type' => 'ESTJ', 'type_ja' => '管理職', 'description' => '説明11'],
            ['type' => 'ESFJ', 'type_ja' => 'セールス', 'description' => '説明12'],
            ['type' => 'ISTP', 'type_ja' => '技術者', 'description' => '説明13'],
            ['type' => 'ISFP', 'type_ja' => 'アーティスト', 'description' => '説明14'],
            ['type' => 'ESTP', 'type_ja' => '実業家', 'description' => '説明15'],
            ['type' => 'ESFP', 'type_ja' => 'エンターテイナー', 'description' => '説明16']
        ];

        DB::table('info_sixteens_personality_types')->insert($data);
    }
}