import { connectDB } from "@/services/config/connectDb";
import { NextRequest, NextResponse } from "next/server";
import TeacherSchema from "@/models/teacherform/teacherform";

export async function PUT(request: NextRequest,{params}:{params:{id:string}}) {
  try {
    const {id} = params;
    const inputData = await request.json();

    const {
        Name,
      Dob,
      Age,
      Email,
      MobileNumber,
      Address,
      City,
      PostalCode,
      Country,
      TotalClass
    } = inputData;

    await connectDB();
    const updateTeacher= await TeacherSchema.findById(id);
    console.log(updateTeacher);
    if (!updateTeacher) {
      return NextResponse.json(
        { message: "Teacher doesn't exist" },
        { status: 401 }
      );
    }
    const updatedTeacher = await TeacherSchema.findOneAndUpdate({
        Name,
        Dob,
        Age,
        Email,
        MobileNumber,
        Address,
        City,
        PostalCode,
        Country,
        TotalClass
    });
    if (!updatedTeacher) {
      return NextResponse.json(
        { message: "Unable to update Teacher Data" },
        { status: 501 }
      );
    }
    return NextResponse.json(
      { message: "Teacher Data Updated Successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}


export async function DELETE(request:NextRequest,{params}:{params:{id:string}}) {
    try{
        // const body= await request.json();
        const {id}=params;
        await connectDB();

        const deleteTeacher = await TeacherSchema.findByIdAndDelete(id);

        if(!deleteTeacher){
            return NextResponse.json(
                {message:"Teacher Data Not Found"},
                {status:404}
            );
        }
        return NextResponse.json(
            {message:"Teacher Data Deleted Successfully"},
            {status:200}
        );
    }
    catch(err:any){
        return NextResponse.json(
            {message: err.message},
            {status:500}
        );
    }
    
}



export async function GET(request: NextRequest,{params}:{params:{id:string}}){
  try{
    await connectDB();
    const {id} = params; 
    const newTeacher= await TeacherSchema.findById(id);

    if(!newTeacher){
      return NextResponse.json(
        {message:"No Teaher Data Found"},
        {status:404}
      );
    }

    return NextResponse.json({newTeacher})
  }
  catch(err: any){
    return NextResponse.json(
      {message: err.message},
      {status:500}
    );
  }
}
