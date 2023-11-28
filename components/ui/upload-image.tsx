"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Expand, Loader2, RotateCcw, Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UploadComponent() {
  const [files, setFiles] = useState<File[]>([]);
  const [loadingState, setLoadingState] = useState<any>({});
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [imagePreviews, setImagePreviews] = useState<{ [key: string]: string }>(
    {}
  );
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [fileDropError, setFileDropError] = useState<string>("");

  const onDragOver = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);

    const selectedFiles = Array.from(e.dataTransfer.files);

    if (selectedFiles.some((file) => file.type.split("/")[0] !== "image")) {
      return setFileDropError("Please provide only image files to upload!");
    }

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    setFileDropError("");
  };

  const fileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files as FileList);

    if (selectedFiles.some((file) => file.type.split("/")[0] !== "image")) {
      return setFileDropError("Please provide only image files to upload!");
    }

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    setFileDropError("");
  };

  const simulateLoading = (file: File) => {
    const duration = Math.max(1000, Math.min(file.size / 750, 4000));

    setLoadingState((prev: any) => ({ ...prev, [file.name]: true }));

    setTimeout(() => {
      setLoadingState((prev: any) => ({ ...prev, [file.name]: false }));
    }, duration);
  };

  const handleDelete = (fileName: string) => {
    // Filtrar los archivos para eliminar el seleccionado
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const formatNumberWithDots = (number: number): string => {
    const numStr = number.toString();
    const reversedStr = numStr.split("").reverse().join("");
    const withDots = reversedStr.replace(/(\d{3})(?=\d)/g, "$1.");
    return withDots.split("").reverse().join("");
  };

  const handlePreview = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const generatePreview = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviews((prev) => ({
        ...prev,
        [file.name]: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    files.forEach((file) => {
      if (loadingState[file.name] === undefined) {
        generatePreview(file);
        simulateLoading(file);
      }
    });
  }, [files, loadingState]);

  return (
    <>
      <div className="dark:bg-neutral-800 bg-white border dark:border-neutral-700 w-full max-w-lg rounded-xl">
        <div className="border-b dark:border-neutral-700">
          <div className="flex flex-row justify-start items-center px-4 py-2 gap-2">
            <div className="rounded-full border p-2 flex flex-row justify-center items-center dark:border-neutral-700">
              <UploadCloud className="h-5 w-5 text-neutral-600" />
            </div>
            <div>
              <p className="font-semibold mb-0">Upload files</p>
              <p className="text-sm text-neutral-500 -mt-1">
                Drag and drop your files. Will not be saved.
              </p>
            </div>
          </div>
        </div>
        <form>
          <label
            htmlFor="file"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div
              className={cn(
                "px-4 py-2 border-[1.5px] border-dashed dark:border-neutral-700 m-2 rounded-xl flex flex-col justify-start items-center hover:cursor-pointer",
                dragOver && "border-blue-600 bg-blue-50"
              )}
            >
              <div className="flex flex-col justify-start items-center">
                <UploadCloud
                  className={cn(
                    "h-5 w-5 text-neutral-600 my-4",
                    dragOver && "text-blue-500"
                  )}
                />
                <p className="font-semibold">
                  Choose a file or drag & drop it here
                </p>
                <p className="text-neutral-500 text-sm">
                  JPEG, PNG formats. Up to 50 MB.
                </p>
                <div className="px-3 py-1 border dark:border-neutral-700 rounded-xl mt-4 mb-2 drop-shadow-sm hover:drop-shadow transition-all hover:cursor-pointer bg-white dark:bg-neutral-700">
                  Select files
                </div>
              </div>
            </div>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={fileSelect}
            multiple
          />
        </form>

        {files.length > 0 && (
          <div className="w-full px-4 py-2 gap-2 flex flex-col justify-start items-center border-t dark:border-neutral-700 max-h-52 overflow-auto">
            {files.map((file, index) => {
              const isLoading = loadingState[file.name];
              const preview = imagePreviews[file.name];

              return (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center border dark:border-neutral-700 rounded-lg px-2 py-1 w-full group"
                >
                  <div className="flex flex-row justify-start items-center gap-2">
                    <div>
                      {isLoading ? (
                        <div className="flex flex-row justify-center items-center gap-2 h-10 w-10 border rounded-md">
                          <Loader2 className="h-4 w-4 animate-spin text-neutral-500" />
                        </div>
                      ) : (
                        preview && (
                          <div className="relative h-10 w-10">
                            <Image
                              src={preview}
                              alt="Preview"
                              fill
                              className="rounded-md h-full w-full border"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <p>{file.name}</p>
                        {!isLoading && (
                          <div className="flex flex-row justify-start items-center text-xs rounded-full px-2 py-[0.5px] gap-1">
                            <div className="h-2 w-2 bg-green-400 rounded-full" />
                            <p className="text-neutral-500">Uploaded</p>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-neutral-500">
                        {formatNumberWithDots(file.size)} Bytes
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => handlePreview(file)}
                          className="text-neutral-400 hidden group-hover:flex flex-row justify-end bg-neutral-100 p-1 rounded-lg hover:text-black transition-all hover:cursor-pointer"
                        >
                          <Expand className="h-4 w-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>{file.name}</DialogTitle>
                        <div className="bg-neutral-100 rounded-xl relative w-full min-h-[300px] h-full flex flex-col justify-center items-center ">
                          {previewImage ? (
                            <Image
                              src={previewImage}
                              alt="Preview"
                              fill
                              className="rounded-md h-full w-full border"
                              style={{ objectFit: "cover" }}
                            />
                          ) : (
                            <Loader2 className="h-4 w-4 animate-spin text-neutral-500" />
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <button
                      className="text-neutral-400 hidden group-hover:flex flex-row justify-end bg-neutral-100 p-1 rounded-lg hover:text-black transition-all hover:cursor-pointer"
                      onClick={() => handleDelete(file.name)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {fileDropError && <p style={{ color: "red" }}>{fileDropError}</p>}
      </div>
      {files.length > 0 && (
        <p
          className="text-sm mt-4 rounded-full px-4 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:cursor-pointer transition-all border text-neutral-500 hover:text-black"
          onClick={() => setFiles([])}
        >
          <RotateCcw className="inline-block h-4 w-4 mr-1" />
          Reset
        </p>
      )}
    </>
  );
}
