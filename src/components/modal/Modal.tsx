"use client"

import { RiCloseCircleFill } from "react-icons/ri";


interface ModalProps {
    title: string
    children: React.ReactNode
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
    return (
        <div className="box-border absolute flex justify-center items-center top-[50%] left-[50%]
        -translate-x-[50%] -translate-y-[50%] h-full w-full z-50">
            <div className="box-border relative flex justify-center items-center h-full w-full">
                <div className="box-border absolute h-full w-full bg-[var(--colour--009)]" onClick={onClose} />
                <div className="box-border absolute flex flex-col justify-between items-center lg:h-[80%] lg:w-[60%] 
                h-[70%] w-[90%] md:h-[60%] py-6 px-0 md:px-4 rounded-notepad bg-background-notepad">
                    <div className="box-border flex justify-between items-center px-8 py-2 h-fit w-full">
                        <label className="relative truncate uppercase font-bold text-sm h-fit w-[80%]">
                            {title}
                        </label>
                        <button className="box-border flex justify-center items-center p-2 h-9 aspect-square
                        rounded-tools-radius hover:bg-background-toolbar hover:text-white" onClick={onClose}>
                            <RiCloseCircleFill className="h-[70%] w-fit" />
                        </button>
                    </div>
                    <div className="box-border flex justify-center items-center px-8 py-2 pb-6 h-[calc(100%-80px)] w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;
