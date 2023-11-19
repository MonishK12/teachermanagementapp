import mongoose from "mongoose";
import { date } from "zod";
const teacherSchema = new mongoose.Schema({
    Dob:{
      type:String
    },
    Name: {
        type: String,
        required:true,
        default:"",
    },
    MobileNumber: {
        type:String,
        required:true,
        default:"",
    },
    Email: {
      type: String,
        required: true,
        default:"",
    },
    Address: {
        type: String,
        required: true,
        default:"",
    },
    City: {
        type: String,
        required: true,
        default:"",
        // unique: true,
        // sparse:true,
        // index:true,
    },
    PostalCode: {
        type: String,
        required: true,
        default:"",
        // unique: true,
        // sparse:true,
        // index:true,
    },
    Country: {
        type: String,
        required: true,
        default:""
        // sparse:true,
        // index:true,
    },
    Age:{
      type:Number,
      required:true,
      default:""
    },
    TotalClass:{
        type:Number,
        required:true,
        default:""
      },
});
const Teacher =mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);
export default  Teacher;