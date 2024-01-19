"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Document, Page } from "react-pdf";

interface Props {
  url: string;
}

export const FullScreenPdf = ({ url }: Props) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(Number(e.target.value));
  };

  return (
    <div className="w-[100vw] h-screen shadow-2xl overflow-y-scroll">
      <div className="flex items-cenbter justify-between border p-2 rounded-t-lg">
        <button
          className={`rounded py-1 px-5 bg-blue-500 hover:bg-blue-600 text-white ${
            pageNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
          }}`}
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center justify-center border w-16 rounded">
          <input
            className="rounded py-2 w-3 focus:outline-none"
            value={pageNumber}
            onChange={handleChangePage}
            readOnly
          />{" "}
          <span> / {numPages}</span>
        </div>

        <button
          className={`rounded py-1 px-5 bg-blue-500 hover:bg-blue-600 text-white ${
            numPages === pageNumber ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === numPages}
        >
          <ArrowRight size={24} />
        </button>
      </div>
      <Document
        file={url}
        error="Something went wrong"
        loading="Loading file"
        noData="No file found"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page className="shadow-xl" pageNumber={pageNumber} />
      </Document>
    </div>
  );
};
