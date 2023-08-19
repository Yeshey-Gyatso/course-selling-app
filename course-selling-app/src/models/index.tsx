import mongoose from "mongoose";
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: {type: String },
    email:{
      type: String,
      required:[true,"Email Required !!"],
      unique:true,
    },
    password:{
      type: String,
      required:[true,"Password Required !!"],
    },
    profileUrl:String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
const adminSchema = new mongoose.Schema({
    username: {
      type: String,
      required:[true,"user name required !!"]        
    },
    password: {
      type: String,
      required:[true,"Password Required !!"],
    },
  });
  
const courseSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
      },
    description:{
      type:String,
      required:true
      },
    price:Number,
    addedDate:{
      type:Date,
      default:Date.now(),
    },
    imageLink:String,
    published:Boolean,
    status:{
      type:String,
      enum:["notpurchased","purchased"],
      default:"notpurchased"
    },
    // userId:{
    //   type: mongoose.Types.ObjectId,
    // }
  });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
export const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
  
 