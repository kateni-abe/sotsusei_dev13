<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FriendshipsTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['user_id' => 1, 'friend_id' => 2, 'is_friends' => true],
            // 他の友達関係のデータも同様に追加
        ];

        DB::table('friendships')->insert($data);
    }
}