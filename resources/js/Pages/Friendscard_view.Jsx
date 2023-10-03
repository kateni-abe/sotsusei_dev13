import React, { useState, useEffect } from "react";

function FriendscardView({ userId }) {
    const [friendData, setFriendData] = useState({});

    useEffect(() => {
        fetch(`/api/friendscard/${userId}`)
            .then((response) => response.json())
            .then((data) => setFriendData(data))
            .catch((error) =>
                console.error("Error fetching friend's card:", error)
            );
    }, [userId]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">友だちのマイカード</div>
            {/* ここに友だちの詳細情報を表示します */}
            {Object.entries(friendData).map(([key, value]) => {
                if (value.is_public) {
                    return (
                        <div key={key}>
                            <strong>{key}:</strong> {value.data}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default FriendscardView;
