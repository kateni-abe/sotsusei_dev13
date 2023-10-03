import React from "react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

function ProfileInput() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        Inertia.visit(route("register"), {
            method: "post",
            data: data,
            onError: (errors) => {
                console.error("Registration failed:", errors);
                console.log(errors); // これを追加
            },
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-2xl font-bold mb-6">ようこそ ヒトトナリヘ</div>
            <div className="text-xl mb-6">
                まずはじめに、あなたの情報を登録してマイページを作成しましょう
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-64">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        氏名
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: "氏名は必須です。" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-xs italic">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "メールアドレスは必須です。",
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        パスワード
                    </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "パスワードは必須です。",
                            minLength: {
                                value: 8,
                                message:
                                    "パスワードは最低8文字である必要があります。",
                            },
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-xs italic">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        パスワード（確認）
                    </label>
                    <input
                        type="password"
                        {...register("password_confirmation", {
                            required: "パスワード（確認）は必須です。",
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password_confirmation && (
                        <span className="text-red-500 text-xs italic">
                            {errors.password_confirmation.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        登録する
                    </button>
                </div>
                <div className="text-center">
                    <InertiaLink href={route("top")}>キャンセル</InertiaLink>
                </div>
            </form>
        </div>
    );
}

export default ProfileInput;
