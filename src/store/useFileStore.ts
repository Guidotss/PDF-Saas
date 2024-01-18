import { toBase64 } from "@/utils";
import { create } from "zustand";

interface FileStore {
  file: File | null;
  base64: string | null;
  setFile: (file: File) => void;
  setBase64: () => Promise<void | null>;
}

export const useFileStore = create<FileStore>((set, get) => ({
  file: null,
  base64: null,

  setFile: (file) => set({ file }),
  setBase64: async () => {
    const file = get().file;
    if (!file) return null;
    const base64 = await toBase64(file);
    set({ base64 });
  },
}));
