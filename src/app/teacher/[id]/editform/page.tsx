'use client'
import React from 'react'
import EditTeacherForm from '@/app/teacher/_components/editteacherform'

const getTeacherById = async(id : string)=>{
    try {
        const res = await fetch(`/api/teacherform/${id}`,{
            cache: "no-cache",
        });
        if(!res.ok){
            throw new Error("failed to fetch");
        }
        return res.json();
    } catch (err) {
        console.log("Error: ",err);
    }
}



export default async function EditTeacher({params} : {params:{id:string}}) {
    const {id} = params;
    console.log("id: ",id);

    const {newTeacher} = await getTeacherById(id);
    console.log(newTeacher);
    const {
        _id,Address,
        City,
        PostalCode,
        Country,
        Name,
        Email,
        MobileNumber ,Age,Dob,TotalClass
      } = newTeacher;
  return ( 
    <div> <EditTeacherForm TeacherId={_id} Address={Address} City={City} PostalCode={PostalCode} Country={Country} Name={Name} Email={Email} MobileNumber={MobileNumber} Age={Age} Dob={Dob} TotalClass={TotalClass}/> </div> 
  )
}

