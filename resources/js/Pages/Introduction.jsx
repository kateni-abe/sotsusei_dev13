import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Introduction = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-4xl font-bold mb-6">ヒトトナリ</div>
            <p className="text-center mb-6">
                ヒトトナリは
                <br />
                コミュニケーションタイプを
                <br />
                お互いにすることで
                <br />
                相手とのコミュニケーションを
                <br />
                円滑にするためのサポートツールです。
            </p>
            <div className="mb-4">
                <InertiaLink
                    href={route("profileInput")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
                >
                    登録する
                </InertiaLink>
            </div>
            <div className="text-center">
                <InertiaLink
                    href={route("top")}
                    className="text-blue-500 hover:text-blue-700"
                >
                    キャンセル
                </InertiaLink>
            </div>
        </div>
    );
};

export default Introduction;
