<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publisher;
class PublisherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $publisher=Publisher::all();
        return response()->json($publisher);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      =>'required|min:4',
            'address'   =>'required',
            'phone'     =>'required'
        ]);
        $publisher=new Publisher();
        $publisher->name=$request->get('name');
        $publisher->address=$request->get('address');
        $publisher->phone=$request->get('phone');
        $publisher->save();
        return response()->json($publisher);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $publisher=Publisher::find($id);
        $publisher->name=$request->get('name');
        $publisher->address=$request->get('address');
        $publisher->phone=$request->get('phone');
        $publisher->save();
        return response()->json($publisher);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $publisher=Publisher::find($id);
        $publisher->delete();
    }
}
