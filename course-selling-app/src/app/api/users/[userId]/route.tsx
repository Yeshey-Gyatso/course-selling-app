import { User } from "@/models";
import { NextResponse } from "next/server";

export async function GET(request:Request,{ params }){
    const {userId}=params;
    const user=await User.findById(userId);
    return NextResponse.json(user)
}