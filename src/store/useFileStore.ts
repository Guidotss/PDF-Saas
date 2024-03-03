import { create } from "zustand";
import { deflateSync } from "zlib";
import { toBase64 } from "@/utils";

interface FileStore {
  file: File | null;
  base64: string | null;
  setFile: (file: File) => void;
  uploadFile: () => Promise<void>;
}

export const useFileStore = create<FileStore>((set, get) => ({
  file: null,
  base64: "",

  setFile: (file) => set({ file }),

  uploadFile: async () => {
    try {
      const file = get().file;
      const base64 = await toBase64(file!);
      set({ base64 });

      const compressedData = deflateSync(base64);



      

      const response = await fetch("http://localhost:8080/files/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pdf: compressedData}),
      });

      const data = await response.json(); 
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  },
}));
