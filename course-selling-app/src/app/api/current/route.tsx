import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models";
import { connectDb } from "@/helper/db";
connectDb();
export async function GET(request:NextResponse){
    const authToken=request.cookies.get("authToken")?.value;
    // console.log(authToken);
    const payload=jwt.verify(authToken, process.env.JWT_KEY);
    // console.log(payload);

    const user=await User.findById(payload._id).select("-password")

    return NextResponse.json(user)
}