import React from "react";
import { connectDB } from "@/services/config/connectDb";
import TeacherSchema from "@/models/teacherform/teacherform";
export default async function Transportlist() {
  await connectDB();
  const newTeacherData = await TeacherSchema.find();
  return (
    <>
      {newTeacherData.map((p: any) => (
       <div className="flex items-center h-screen w-full justify-center" key={p._id}>

       <div className="max-w-xs">
           <div className="bg-white shadow-xl rounded-lg py-3">
               <div className="p-2">
                   <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{p.Name}</h3>
                   <div className="text-center text-gray-400 text-xs font-semibold">
                       <p>Teacher</p>
                   </div>
                   <table className="text-xs my-3">
                       <tbody><tr>
                           <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                           <td className="px-2 py-2">{p.Address}</td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                           <td className="px-2 py-2">{p.MobileNumber}</td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                           <td className="px-2 py-2">{p.Email}</td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 text-gray-500 font-semibold">Age</td>
                           <td className="px-2 py-2">{p.Age}</td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 text-gray-500 font-semibold">Total Classes</td>
                           <td className="px-2 py-2">{p.TotalClass}</td>
                       </tr>
                   </tbody></table>
       
                   <div className="text-center my-3">
                       <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">Back</a>
                   </div>
       
               </div>
           </div>
       </div>
       
       </div>
      ))}
    </>
  );
}
