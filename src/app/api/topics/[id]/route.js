import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export default async function DELETE(req,{params}){
    const {id}= params;

    await connectMongoDB()
    await Topic.findByIdAndDelete(id)


    return NextResponse.json({message:"delete"},{status:200});
}