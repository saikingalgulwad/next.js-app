
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import mongoose  from "mongoose";
import Topic from "@/models/topic";

export async function GET(req) {
    await connectMongoDB();
   const data = await Topic.find();
    return NextResponse.json(data);
}
export async function POST(req) {
    const{title,description,username,password}= await req.json();

  await  connectMongoDB();
  const res=  await Topic.create({title:title,description:description,username:username,password:password});
  return NextResponse.json({Message:"create data"},{status:201});

}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({message:"topic deleted"},{status:200});
}