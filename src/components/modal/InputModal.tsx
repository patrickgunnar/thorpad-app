"use client"

import useInputModal from "@/hooks/useInputModal";
import Modal from "./Modal";
import { FormEvent, useRef } from "react";
import useNotetaking from "@/hooks/useNotetaking";
import { toast } from "react-hot-toast";


const InputModal = () => {
    // modal hook
    const { open, onClose } = useInputModal()
    // content hook
    const { setContent } = useNotetaking()

    // input ref
    const inputRef = useRef<HTMLInputElement | null>(null)

    if(!open) return null

    // button classes
    const classesBtns = `box-border flex justify-center items-center rounded-tools-radius drop-shadow-ds-001 
    bg-background-toolbar text-white font-bold p-4 h-18 w-fit md:w-[30%] hover:opacity-75`

    // save file content  handler
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        // get file
        const currentFile = inputRef.current?.files?.[0]

        if(!currentFile) return

        // Check the file extension
        const allowedExtensions = ['.txt'];
        const fileExtension = currentFile.name.split('.').pop()?.toLowerCase()

        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
            return toast.error('We accept text files with the .txt extension only')
        }

        const reader = new FileReader()

        reader.onload = (loadedEvent) => {
            const fileContent = loadedEvent.target?.result

            if(typeof fileContent !== "string") {
                return toast.error('File is not a string')
            }

            // set content
            setContent(fileContent)
            localStorage.setItem('thorpadData', fileContent)
            onClose()
            toast.success('Content loaded successfully')
        }

        reader.readAsText(currentFile)
    }

    return (
        <Modal title="Kindly Elect a Document: Please Select a File" onClose={onClose}>
            <form className="box-border flex flex-col justify-around items-center h-full w-full" onSubmit={handleFormSubmit}>
                <div className="box-border flex flex-col justify-center items-start p-4 h-fit w-full">
                    <label className="relative truncate uppercase text-sm font-semibold py-3 h-fit w-full">
                        Select a &apos;.txt&apos; file:
                    </label>
                    <input className="box-border flex justify-center items-center py-5 px-1 md:p-5 w-full 
                    rounded-tools-radius border-[1px] border-black"
                        type="file" 
                        placeholder="Select your '.txt' file" 
                        required
                        ref={inputRef}
                    />
                </div>
                <div className="box-border flex gap-5 justify-around items-center h-fit w-full">
                    <button className={`${classesBtns}`} type="button" onClick={onClose}>
                        Cancel
                    </button>
                    <button  className={`${classesBtns}`} type="submit">
                        Import
                    </button>
                </div>
            </form>
        </Modal>
    );
}
 
export default InputModal;
