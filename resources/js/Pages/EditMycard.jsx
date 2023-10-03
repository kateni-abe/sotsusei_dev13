import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from "axios";

function EditMycard() {
    const [icon, setIcon] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [birthdateVisibility, setBirthdateVisibility] = useState("");
    const [personalityType, setPersonalityType] = useState("");
    const [chronotype, setChronotype] = useState("");

    const handleSave = () => {
        // Axiosのインポートが必要です。もしまだインポートしていない場合、ファイルの上部で追加してください。
        // import axios from 'axios';

        const profileData = {
            icon: icon,
            birthdate: birthdate,
            birthdate_visibility: birthdateVisibility,
        };

        const personalityData = {
            type: personalityType,
        };

        const chronotypeData = {
            type: chronotype,
        };

        // APIエンドポイントへデータを送信する
        axios
            .post("/api/updateProfile", profileData)
            .then((response) => {
                // プロフィールの更新が成功したら、16タイプのデータを更新
                return axios.post(
                    "/api/updateSixteenPersonalities",
                    personalityData
                );
            })
            .then((response) => {
                // 16タイプの更新が成功したら、クロノタイプのデータを更新
                return axios.post("/api/updateChronotypes", chronotypeData);
            })
            .then((response) => {
                // 全てのデータの更新が完了したら、マイページへリダイレクト
                window.location.href = route("mypage");
            })
            .catch((error) => {
                console.error("データの更新中にエラーが発生しました:", error);
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">マイカードを編集</div>

            {/* Icon */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    アイコン
                </label>
                <input
                    type="text"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                />
            </div>

            {/* Birthdate */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    誕生日
                </label>
                <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
            </div>

            {/* Birthdate Visibility */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    誕生日の公開設定
                </label>
                <select
                    value={birthdateVisibility}
                    onChange={(e) => setBirthdateVisibility(e.target.value)}
                >
                    <option value="public">公開</option>
                    <option value="private">非公開</option>
                </select>
            </div>

            {/* 16タイプ */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    16タイプ診断結果
                </label>
                <select
                    value={personalityType}
                    onChange={(e) => setPersonalityType(e.target.value)}
                >
                    <option value="1">INTJ-A 建築家</option>
                    <option value="2">INTJ-T 建築家</option>
                    <option value="3">INTP-A 論理学者</option>
                    <option value="4">INTP-T 論理学者</option>
                    <option value="5">ENTJ-A 統率者</option>
                    <option value="6">ENTJ-T 統率者</option>
                    <option value="7">ENTP-A デバイサー</option>
                    <option value="8">ENTP-T デバイサー</option>
                    <option value="9">INFJ-A 提唱者</option>
                    <option value="10">INFJ-T 提唱者</option>
                    <option value="11">INFP-A 理想主義者</option>
                    <option value="12">INFP-T 理想主義者</option>
                    <option value="13">ENFJ-A 教育者</option>
                    <option value="14">ENFJ-T 教育者</option>
                    <option value="15">ENFP-A 冒険家</option>
                    <option value="16">ENFP-T 冒険家</option>
                </select>
            </div>

            {/* クロノタイプ */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    クロノタイプ診断結果
                </label>
                <select
                    value={chronotype}
                    onChange={(e) => setChronotype(e.target.value)}
                >
                    <option value="1">ライオン</option>
                    <option value="2">クマ</option>
                    <option value="3">オオカミ</option>
                    <option value="4">イルカ</option>
                </select>
            </div>

            {/* 保存ボタンとキャンセルボタン */}
            <div className="mt-8 flex space-x-4">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    保存
                </button>

                <InertiaLink
                    href={route("mypage")}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    キャンセル
                </InertiaLink>
            </div>
        </div>
    );
}

export default EditMycard;
