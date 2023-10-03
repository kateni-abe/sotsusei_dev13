<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chronotype;
use App\Models\InfoChronotype;
use Illuminate\Support\Facades\Auth;

class ChronotypeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth'); // 認証ユーザーのみアクセスを許可
    }

    public function index()
    {
        $user = Auth::user();
        $chronotype = $user->chronotype;
        $infoChronotype = InfoChronotype::where('chronotype_id', $chronotype->id)->first();
        return view('chronotypes.index', compact('chronotype', 'infoChronotype'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
        ]);
        
        $chronotype = Chronotype::firstOrNew(['user_id' => Auth::id()]);
        $chronotype->type = $validated['type'];
        $chronotype->save();
        
        return response()->json(['message' => 'Chronotype saved successfully'], 201);
    }

    public function update(Request $request, $id)
    {
        $chronotype = Chronotype::findOrFail($id);
        $chronotype->update($request->all());
        return redirect()->back()->with('success', 'クロノタイプが更新されました');
    }
}