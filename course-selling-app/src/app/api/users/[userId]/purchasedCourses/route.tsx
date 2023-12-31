import { Course, User } from "@/models";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { getResponseMessage } from "@/helper/error";

export async function GET(request:Request,{ params }){
  await connectDb();
    const {userId}=params;
   
    const user=await User.findById(userId).populate('purchasedCourses');
    if (user) {
        return NextResponse.json({ purchasedCourses: user.purchasedCourses || [] });
      } else {
        return getResponseMessage("user not found",400,false)
      }
    
}
