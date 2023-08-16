
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();
export function GET(){
    const courses=[
    {   
        title:"book1",
        description:"it is a nice book"

    },
    {   
        title:"book2",
        description:"it is a nice book2"

    },

]
return NextResponse.json(courses);

}
// export function POST(){}
// export function PUT(){}
// export function DELETE(){}
