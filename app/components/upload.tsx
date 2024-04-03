"use client"
import { useState, createContext } from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { useFileContext } from "./MyContext";

export const FileContext = createContext('')
function Upload(requiredParam: any) {
  const [isDragging, setIsDragging] = useState(false);
  const {files, setFiles} = useFileContext()
  
  

  const handleDragOver = (e:any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e:any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e:any) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    // Process the dropped files here
    console.log(files);
  };

  const uploadedFile = (e:any) =>{
    setFiles(e.target.value)
}
  return (
    <div
      className={`mt-2 flex justify-center rounded-lg border ${
        isDragging ? "border-indigo-600" : "border-dashed"
      } border-gray-900/25 px-6 py-10`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-center">
        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" {...requiredParam} onChange={uploadedFile}/>
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  );
}

export default Upload;

