import { connectDb } from "@/helper/db";
import { User } from "@/models";
import { NextResponse } from "next/server";
connectDb();
export async function GET(request:Request,{ params }){
    const {userId}=params;
    const user=await User.findById(userId);
    return NextResponse.json(user)
}