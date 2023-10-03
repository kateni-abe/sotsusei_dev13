import React, { useState, useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function MakeFriend({ userId }) {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // ここでAPIを呼び出して、userIdに関連するユーザー名を取得します。
        // この例では、APIの実際のエンドポイントやロジックは示していません。
        // 実際の実装に応じて適切に修正する必要があります。
        fetch(`/api/user/${userId}`)
            .then((response) => response.json())
            .then((data) => setUserName(data.name))
            .catch((error) => console.error("Error fetching user:", error));
    }, [userId]);

    const handleAddFriend = () => {
        // ここでAPIを呼び出して、友達としてユーザーを追加します。
        // この例では、APIの実際のエンドポイントやロジックは示していません。
        // 実際の実装に応じて適切に修正する必要があります。
        fetch(`/api/friendships/add/${userId}`, { method: "POST" })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // 成功した場合、ユーザーをマイページにリダイレクトします。
                    window.location.href = "/mypage";
                } else {
                    console.error("Error adding friend:", data.message);
                }
            })
            .catch((error) => console.error("Error adding friend:", error));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">友達になる</div>

            {/* ユーザー名 */}
            <div className="text-xl mb-6">{userName}</div>

            {/* 友達になるボタン */}
            <div className="mb-4">
                <button
                    onClick={handleAddFriend}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    友だちになる
                </button>
            </div>
        </div>
    );
}

export default MakeFriend;
