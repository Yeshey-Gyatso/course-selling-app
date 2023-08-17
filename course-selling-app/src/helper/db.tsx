import mongoose from "mongoose";
import { Course } from "@/models";

export const connectDb = async()=>{
    try {
const {connection} =await mongoose.connect('mongodb+srv://yesheygyatso:qwer@cluster0.gtye3uq.mongodb.net/', { dbName: "course-selling-app" });
       console.log(connection) 
       console.log("db connected .........")

    //    testing of course in db
    //    const course=new Course({
    //     title:"cat",
    //     description:"it is a small cat",
    //     price:99999,
    //     imageLink:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    //     published:true
    //    });
    //    await course.save();
    //    console.log("course is created ")
    } catch (error) {
        console.log("failed to connect database");
        console.log(error);
    }
}