"use client"
import Image from "next/image";
import EmailBox from "@/app/components/emailbox";
import Upload from "@/app/components/upload";
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {ref, uploadBytes} from "firebase/storage"
import { storage } from "@/app/config/firebase-client";
import { useFileContext } from "@/app/components/MyContext";

// Validation Schema
 const schema = yup.object().shape({
        email: yup.string().required("*Select an email"),
        file:  yup.mixed().required('*Please select file')
    }).required()

export default function Page() {
    const {files, setFiles} = useFileContext()
    // firebase storage 
    const fileRef = ref(storage, "images")
    uploadBytes(fileRef, files)
    .then(() => console.log("File uploaded successfully"))
    .catch((error) => console.error("Upload failed:", error));
   
    // firebase storage end
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

   const onSubmit = () =>{
    console.log("File uploaded")
   }
    return (
        <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-40 w-auto"
              src="logo.png "
              alt="Your Company"
            />
         
          </div>
  
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
           <EmailBox errormsg={errors.email?.message} {...register("email")}/>
           
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="files" className="block text-sm font-medium leading-6 text-gray-900">
                  Drop or Drag files 
                  </label>
                  <p className="text-red-400">{errors.file?.message}</p>
                </div>
                <Upload requiredParam={register("file")}/>
              </div>
  
              <div>
                <input
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                />
                
              </div>
            </form>
          </div>
        </div>
    
    )
  }
  