import Teacher from '@/models/teacherform/teacherform'

import { connectDB } from "@/services/config/connectDb";
import { NextRequest,NextResponse } from "next/server";
    

export async function GET() {
  try {
    await connectDB();
    const newTeacher = await Teacher.find({});

    if (!newTeacher) {
      return NextResponse.json(
        { message: "Teacher not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(newTeacher, {
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}


export async function POST(req: Request) {
  try {
    const inputData = await req.json();
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
  } = inputData
  
    
    await connectDB();

    
    const user = await Teacher.findOne({ Email:Email });

    if (user) {
      return NextResponse.json(
        { message: "This email already exists." },
        {
          status: 401,
        }
      );
    }
    
    const newUser = new Teacher({
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
    const newUserCreated = await newUser.save();

    if(!newUserCreated){
        return NextResponse.json(
            {message:"Unable to register new User"},
            {
                status:501,
            }
        )
    }
    return NextResponse.json(newUserCreated,
      {
        status:200
      },
    )

  }
  catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(request: NextRequest,) {
    try {
      // type BodyType = { id: string };
      const body = await request.json();
  
      const id= request.nextUrl.searchParams.get("id");
  
      await connectDB();
      const deleteTeacher = await Teacher.findByIdAndDelete(id);
      console.log(deleteTeacher)
      if (!deleteTeacher) {
        return NextResponse.json(
          { message: "Teacher not found" },
          {
            status: 404,
          }
        );
      }
  
      return NextResponse.json(
        { message: "Teacher deleted successfully" },
        {
          status: 200,
        }
      );
    } catch (err: any) {
      return NextResponse.json(
        { message: err.message },
        {
          status: 500,
        }
      );
    }
  }

