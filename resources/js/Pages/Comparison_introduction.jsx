import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function ComparisonIntroduction({ friendName }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">相性の比較</div>
            <p>{friendName}との相性を比較しますか？</p>

            <InertiaLink
                href={route("Comparison")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
            >
                比較する
            </InertiaLink>

            <InertiaLink
                href={route("Friend_index")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
            >
                キャンセル
            </InertiaLink>
        </div>
    );
}

export default ComparisonIntroduction;
