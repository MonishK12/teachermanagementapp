import { z } from "zod";
export const addnewteacherSchema = z.object({
  TeacherId: z.string().optional(),
  Address: z.string().optional(),
  City: z.string().optional(),
  PostalCode: z.string().optional(),
  Country: z.string().optional(),
  Name: z.string().optional(),
  Email: z.string().email().optional(),
  Dob: z
    .date({
      required_error: "A dob is required.",
    })
    .optional(),
  Age: z.coerce.number().gt(5,{message:"Right Age is required"}).lt(150,{message:"Right Age is required"}).optional(),
  MobileNumber: z
    .string()
    .min(10,{message:"Enter a Correct Number"})
    .max(10,{message:"Enter a Correct Number"})
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Input should be a number",
    }),
  TotalClass:z.coerce.number().optional()
  //   average:z.string().optional()
});
