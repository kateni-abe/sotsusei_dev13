import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function FriendIndex({ friendships = [], users = [] }) {
    // 友達のIDに基づいて名前を取得するヘルパー関数
    const getFriendNameById = (friendId) => {
        const user = users.find((user) => user.id === friendId);
        return user ? user.name : "Unknown";
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">友だち一覧</div>

            {friendships.map((friendship) => (
                <InertiaLink
                    key={friendship.id}
                    href={route("Friendscard_view", {
                        userId: friendship.friend_id,
                    })}
                    className="block mb-2"
                >
                    {getFriendNameById(friendship.friend_id)}
                </InertiaLink>
            ))}

            <InertiaLink
                href={route("mypage")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
            >
                閉じる
            </InertiaLink>
        </div>
    );
}

export default FriendIndex;
