import { addnewteacherSchema } from '@/validators/teacherAuth';
import { z } from 'zod';

export async function createNewTeacher(inputData:z.infer<typeof addnewteacherSchema>) {
    const res = await fetch(`${process.env.CLIENT_URL}/api/teacherform`,{
        method: "POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(inputData),
        cache:"no-store",
    });
    return res;
}

export async function editTeacher(id:string,inputData: z.infer<typeof addnewteacherSchema>) {
    const res = await fetch(`${process.env.CLIENT_URL}/api/teacherform/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
      cache: "no-store",
    });
    return res;
  }

export async function getAllTeacher() {
    const res = await fetch(`${process.env.CLIENT_URL}/api/teacherform/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body:"",
      cache: "no-store",
    });
    return res;
  }