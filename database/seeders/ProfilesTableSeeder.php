<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfilesTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'user_id' => 1, // 仮のuser_id
                'icon' => 'path_to_icon',
                'birthdate' => '2000-01-01',
                'birthdate_visibility' => true,
                'birthplace' => 'Tokyo',
                'birthplace_visibility' => true,
                'residence' => 'Osaka',
                'residence_visibility' => true,
                'company_name' => 'Company A',
                'company_name_visibility' => true,
                'industry' => 'Tech',
                'industry_visibility' => true,
                'position' => 'Engineer',
                'position_visibility' => true,
                'phone_number' => '0123456789',
                'phone_number_visibility' => true,
                'mobile_number' => '0987654321',
                'mobile_number_visibility' => true,
                'email' => 'user@example.com',
                'email_visibility' => true,
                'facebook_account' => 'user_facebook',
                'facebook_account_visibility' => true,
                'x_account' => 'user_x',
                'x_account_visibility' => true,
                'instagram_account' => 'user_instagram',
                'instagram_account_visibility' => true,
            ],
            // 他のプロファイルのデータも同様に追加
        ];

        DB::table('profiles')->insert($data);
    }
}