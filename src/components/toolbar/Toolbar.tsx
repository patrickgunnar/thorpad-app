"use client";

import {
    BiBold,
    BiItalic,
    BiSolidEraser,
    BiSolidFolderOpen,
    BiSolidSave,
    BiUnderline,
} from "react-icons/bi";
import ToolItem from "./ToolItem";

const tools = [
    { name: "Clear", icon: BiSolidEraser, id: "clear-tool" },
    { name: "Open", icon: BiSolidFolderOpen, id: "open-tool" },
    { name: "Save", icon: BiSolidSave, id: "save-tool" },
    { name: "Bold", icon: BiBold, id: "bold-tool" },
    { name: "Italic", icon: BiItalic, id: "italic-tool" },
    { name: "Underline", icon: BiUnderline, id: "underline-tool" },
];

const Toolbar = () => {
    // tools handlers
    const handleTools = (id: string) => {
        console.log(id);
    }

    return (
        <div className="box-border bg-background-toolbar drop-shadow-ds-001 flex gap-4 justify-center items-center 
        text-white p-1 h-14 lg:h-10 w-full z-50"
        >
            <div className="box-border hidden lg:flex gap-2 justify-center items-center px-8 h-full w-fit">
                <div>Logo</div>
                <label>Thorpad</label>
            </div>
            <div className="box-border flex gap-2 justify-center items-center md:px-10 h-full w-full md:w-fit">
                {tools.map(({ id, name, icon }) => (
                    <ToolItem key={id} id={id} name={name} icon={icon} onClick={handleTools} />
                ))}
            </div>
            <div className="box-border hidden md:flex gap-2 justify-center items-center px-8 h-full w-fit">
                <div>Chars</div>
                <div>Words</div>
            </div>
        </div>
    );
};

export default Toolbar;
