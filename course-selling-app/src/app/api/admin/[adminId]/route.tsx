import { Admin } from "@/models";
import { connectDb } from "@/helper/db";

import { NextResponse } from "next/server";

connectDb();

export async function GET(request:Request,{ params }){
    const {adminId}=params;
    const admin=await Admin.findById(adminId);
    return NextResponse.json(admin)
}


export async function DELETE(request:Request,{ params }){
        const {adminId}=params;
        try {
           await Admin.deleteOne({
                _id:adminId
            });
            return NextResponse.json({
                message:"user deleted",
                success:true
            })
        } catch (error) {
            return NextResponse.json({
                message:"Error in deleting",
                success:false
            })
        }
}