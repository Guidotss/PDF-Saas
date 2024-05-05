import { create } from "zustand";
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

      const binary = atob(base64.split(",")[1]);
      const array = Array.from(binary, (char) => char.charCodeAt(0));

      const blob = new Blob([new Uint8Array(array)], {
        type: "application/pdf",
      });

      const formData = new FormData();
      formData.append("file", blob);

      const response = await fetch("http://localhost:8080/files/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/pdf",
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));
