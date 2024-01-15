import { File, Ghost, PlusCircle, PlusIcon } from "lucide-react";

export default function HomePage(){
    return (
        <main>
            <header className="flex items-center justify-between p-4 shadow-md">
                <div className="flex items-center">
                    <File className="text-black"/> 
                    <h1 className="text-xl font-bold">Chat PDF</h1>
                </div>
                <div className="flex items-center gap-x-6">
                    <h4 className="text-sm font-semibold">Dashboard</h4>
                    <div className="w-10 h-10 rounded-full bg-zinc-700"/>
                </div>
            </header>
            <section className="p-5 mt-5">
                <div className="flex justify-center items-center h-[80vh]">
                    <div className="flex flex-col items-center">
                        <Ghost className="text-black"/>
                        <h3 className="text-xl font-bold text-zinc-800">No files found</h3>
                        <p className="text-zinc-500">Upload a file to get started</p>
                        <button className="flex items-center gap-x-2 mt-5 px-5 py-2 rounded-full bg-zinc-700 text-white">
                            <PlusIcon className="text-white"/>
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}