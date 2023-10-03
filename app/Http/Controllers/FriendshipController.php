<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Friendship;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FriendshipController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth'); // 認証ユーザーのみアクセスを許可
    }

    /**
     * ユーザの友達一覧を取得・表示
     */
    public function index()
    {
        $user = Auth::user();
        $friends = $user->friends; // friendsはユーザモデルで定義するリレーションメソッドです
        return view('friendships.index', compact('friends'));
    }
    
    /**
     * 新しい友達関係を作成
     */
    public function store(Request $request)
    {
        $friend = User::find($request->friend_id);
        $user = Auth::user();
        
        // 既に友達であるかの確認
        $existingFriendship = Friendship::where(function ($query) use ($user, $friend) {
            $query->where('user_id', $user->id)
                ->where('friend_id', $friend->id);
        })->orWhere(function ($query) use ($user, $friend) {
            $query->where('user_id', $friend->id)
                ->where('friend_id', $user->id);
        })->exists();
        
        if ($existingFriendship) {
            return redirect()->back()->with('error', '既に友達です');
        }

        // 友達関係の作成
        $friendship = new Friendship;
        $friendship->user_id = $user->id;
        $friendship->friend_id = $friend->id;
        $friendship->is_friends = true;
        $friendship->save();

        return redirect()->back()->with('success', '友達になりました');
    }
    
    /**
     * 友達関係を削除
     */
    public function destroy($id)
    {
        $friendship = Friendship::findOrFail($id);
        $friendship->delete();
        return redirect()->back()->with('success', '友達をやめました');
    }
}