import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models";
import { connectDb } from "@/helper/db";

export async function GET(request:NextResponse){
    const authToken=request.cookies.get("authToken")?.value;
    // console.log(authToken);
    // if(!authToken){
    //     return NextResponse.json({
    //         message:"user ins't logged in"
    //     })
    // }
    const payload=jwt.verify(authToken, process.env.JWT_KEY);
    // console.log(payload);
    await connectDb();
    const user=await User.findById(payload._id).select("-password")

    return NextResponse.json(user)
}