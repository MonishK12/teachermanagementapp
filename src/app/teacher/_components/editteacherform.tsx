"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import { addnewteacherSchema } from "@/validators/teacherAuth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
// import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { createNewTeacher, editTeacher } from "../_components/newTeacherApi";
// import { Textarea } from "@/src/components/ui/textarea";
// import { createNewInvoice } from "../_components/newInvoiceAPI";
type Input = z.infer<typeof addnewteacherSchema>;

export default function EditTeacherForm({Address,TeacherId,
City,
PostalCode,
Country,
Name,
Email,
MobileNumber ,Age ,Dob ,TotalClass}: Input) {
// export default function editInvoiceForm() {
const form = useForm<Input>({
  resolver: zodResolver(addnewteacherSchema),
  defaultValues: {
    Address:Address,
    City:City,
    PostalCode:PostalCode,
    Country:Country,
    Name:Name,
    Email:Email,
    MobileNumber:MobileNumber,
    Age:Age,
    TotalClass:TotalClass
  },
});


async function onSubmit(data: Input) {
    // alert(JSON.stringify(data, null, 4));
     console.log(data);
    const res= await editTeacher( TeacherId! ,data);
    const responseData = await res.json();
    console.log(responseData);
  }
  return (
    <div className="align-middle justify-center">
      <Card className="w-[730px]">
        <CardHeader>
          <CardTitle>Add New Teacher</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <div className={cn("space-y-3 space-x-0")}>
                {/* name */}
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               {/* Dob */}
               <FormField
                control={form.control}
                name="Dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date: any) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Age */}
              <FormField
                control={form.control}
                name="Age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the Age..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Total Class */}
              <FormField
                control={form.control}
                name="TotalClass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Classes</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the Total Classes..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Mobile Number */}
              <FormField
                control={form.control}
                name="MobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Mobile Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* </motion.div>
               
              <motion.div
                className={cn("space-y-2 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              > */}
              {/* Street*/}
              <FormField
                control={form.control}
                name="Address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Address..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* City Or State */}
              <FormField
                control={form.control}
                name="City"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City or State</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter City/State name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Pincode */}
              <FormField
                control={form.control}
                name="PostalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pin Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the Pincode..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Country */}
              <FormField
                control={form.control}
                name="Country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter country name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
