import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function Mypage(props) {
    console.log("Received props:", props);

    const { auth } = props;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">マイページ</div>

            {/* ログインしたユーザー名 */}
            <h1 className="text-4xl mb-6">
                {auth && auth.user && auth.user.name}
            </h1>

            {/* ViewMycard.jsxへのリンクボタン */}
            <div className="mb-4">
                <InertiaLink
                    href={route("view_mycard")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                >
                    マイカードを表示
                </InertiaLink>
            </div>

            {/* EditMycard.jsxへのリンクボタン */}
            <div className="mb-4">
                <InertiaLink
                    href={route("edit_mycard")}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                >
                    マイカードを編集
                </InertiaLink>
            </div>

            {/* Friend_index.jsxへのリンクボタン */}
            <div className="mb-4">
                <InertiaLink
                    href={route("Friend_index")}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                >
                    友達一覧を表示
                </InertiaLink>
            </div>

            {/* SendCard.jsxへのリンクボタン */}
            <div className="mb-4">
                <InertiaLink
                    href={route("Send_card")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                >
                    マイカードを渡す
                </InertiaLink>
            </div>

            {/* ログアウトボタン */}
            <div className="mb-4">
                <InertiaLink
                    method="post"
                    href={route("logout")}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    ログアウト
                </InertiaLink>
            </div>
        </div>
    );
}

export default Mypage;
