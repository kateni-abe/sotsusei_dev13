import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function Comparison() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">生成結果を表示</div>

            <InertiaLink
                href={route("mypage")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
            >
                マイページへ戻る
            </InertiaLink>
        </div>
    );
}

export default Comparison;
