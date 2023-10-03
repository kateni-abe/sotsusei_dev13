import React from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const Top = () => {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        // メールアドレスとパスワードの両方が入力されていない場合、リクエストを送信しない
        if (!data.email || !data.password) {
            alert("メールアドレスとパスワードの両方を入力してください");
            return;
        }

        post(route("login"), {
            onSuccess: () => console.log("User logged in"),
            onError: () => alert("入力内容に誤りがあります"),
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-4xl font-bold mb-6">ヒトトナリ</div>
            <form onSubmit={submit} className="w-64">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        パスワード
                    </label>
                    <input
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        ログイン
                    </button>
                </div>
                <div className="text-center">
                    <InertiaLink
                        href={route("introduction")}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        新規登録はこちら
                    </InertiaLink>
                </div>
            </form>
        </div>
    );
};

export default Top;
