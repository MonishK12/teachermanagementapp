import Link from 'next/link'
import { connectDB } from '@/services/config/connectDb';
import TeacherSchema from '@/models/teacherform/teacherform';
import { Key } from 'lucide-react';

// const getProducts = async () => {
//     try {
//         const res =await getAllProducts();
//         if(!res.ok){
//             throw new Error("Failed to fetch");
//             console.log(res)
//         }
//         return res.json();
//     } catch (err) {
//         console.log("err: ",err);
//     }
// }

export default async function Teacherlist() {



  // useEffect(() => {
   
      await connectDB();
      const newTeacherData = await TeacherSchema.find();
      // return newProductData
    

  
  // }, []);
 console.log(newTeacherData);
  return (
    <>
  
     {newTeacherData.map((p:any) => (
    <div className=' m-5 bg-slate-300  flex rounded-lg justify-between' key={p._id}>
        {/* <div className='p-5'>{p.invoiceid}</div> */}
        <div className='p-5'>{p.Name}</div>
        <div className='p-5'>{p.MobileNumber}</div>
        <div className='p-5'>{p.TotalClass}</div>
       <div className='p-5'><Link href={`${process.env.CLIENT_URL}/teacher/${p._id}/viewteacher`}><svg  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 42 42" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.3,20.1c0,3.1,2.6,5.7,5.7,5.7s5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7S15.3,17,15.3,20.1z M23.4,32.4
	C30.1,30.9,40.5,22,40.5,22s-7.7-12-18-13.3c-0.6-0.1-2.6-0.1-3-0.1c-10,1-18,13.7-18,13.7s8.7,8.6,17,9.9
	C19.4,32.6,22.4,32.6,23.4,32.4z M11.1,20.7c0-5.2,4.4-9.4,9.9-9.4s9.9,4.2,9.9,9.4S26.5,30,21,30S11.1,25.8,11.1,20.7z"/>
</svg></Link> </div> 
        <div className='p-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg></div>
        <div className='p-5'><Link href={`${process.env.CLIENT_URL}/teacher/${p._id}/editform`}><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></Link>
</div>


    </div>
    ) )} 
    {/* </div> */}
    </>
  )
}
