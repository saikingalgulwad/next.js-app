import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export default async function PUT(req,{params}){
    const {id}= params;

    await connectMongoDB()
    const data=await Topic.findByIdAndDelete(id)


    return NextResponse.json({message:data});
}