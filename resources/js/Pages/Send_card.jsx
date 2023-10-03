import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import QRCode from "qrcode.react"; // QRCodeパッケージを使用します。

function SendCard({ user = {} }) {
    // ユーザーIDをURLに埋め込んだQRコードのリンク先
    const qrLink = `${window.location.origin}/make_friend/${user.id}`;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">Send Card</div>

            {/* ユーザー名（上下逆さまに表示） */}
            <div className="text-xl mb-6 transform rotate-180">{user.name}</div>

            {/* QRコード */}
            <div className="mb-6">
                <QRCode value={qrLink} />
            </div>

            {/* 閉じるボタン */}
            <InertiaLink
                href={route("mypage")}
                as="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                閉じる
            </InertiaLink>
        </div>
    );
}

export default SendCard;
