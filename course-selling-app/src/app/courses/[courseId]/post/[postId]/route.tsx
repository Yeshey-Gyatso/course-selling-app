import { NextResponse } from "next/server";

export default function POST(request,{params}){
    return NextResponse.json(params)
    const{userId,postId}=params;
} 