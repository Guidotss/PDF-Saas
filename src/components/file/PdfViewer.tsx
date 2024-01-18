"use client";

import { useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { Ghost } from "lucide-react";
import { useFileStore } from "@/store/useFileStore";
import { UploadInput } from ".";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const PdfViewer = () => {
  const { file, base64, setBase64 } = useFileStore();

  useEffect(() => {
    if (file) {
      setBase64();
    }
  }, [file]);

  return (
    <section className="p-5 mt-5">
      {!base64 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="flex flex-col items-center">
            <Ghost className="text-black" />
            <h3 className="text-xl font-bold text-zinc-800">No files found</h3>
            <p className="text-zinc-500">Upload a file to get started</p>
            <UploadInput />
          </div>
        </div>
      ) : (
        <Document
          file={base64}
          className={`w-full h-[80vh]`}
          error="Something went wrong"
          loading="Loading file"
          noData="No file found"
        >
          <Page pageNumber={1} />
        </Document>
      )}
    </section>
  );
};
