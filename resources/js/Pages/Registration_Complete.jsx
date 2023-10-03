import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function Registration_Complete() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">登録完了！</div>
            <div className="text-xl mb-6">
                マイページで自分の情報を登録して、フレンズとつながりましょう！
            </div>
            <div className="mb-4">
                <InertiaLink
                    href={route("mypage")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    マイページを表示
                </InertiaLink>
            </div>
        </div>
    );
}

export default Registration_Complete;
