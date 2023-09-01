"use client";

import {
    BiSolidEraser, BiSolidFolderOpen, BiSolidSave
} from "react-icons/bi";
import { GiThorHammer } from "react-icons/gi";
import ToolItem from "./ToolItem";
import ToolValues from "./ToolValues";
import useNotetaking from "@/hooks/useNotetaking";

const tools = [
    { name: "Clear", icon: BiSolidEraser, id: "clear-tool" },
    { name: "Open", icon: BiSolidFolderOpen, id: "open-tool" },
    { name: "Save", icon: BiSolidSave, id: "save-tool" },
];

const Toolbar = () => {
    // notetaking hook
    const { content } = useNotetaking()

    // tools handlers
    const handleTools = (id: string) => {
        console.log(id)
    }

    // current words and chars values
    const words = content.split(/\s+/).filter(word => word.trim() !== '').length
    const chars = content.length

    return (
        <div className="box-border bg-background-toolbar drop-shadow-ds-001 flex gap-4 justify-between items-center 
        text-white p-1 px-4 h-14 lg:h-10 w-full z-50"
        >
            <div className="box-border hidden lg:flex gap-2 justify-center items-center h-full w-fit">
                <GiThorHammer className="h-[70%] w-fit" />
                <label className="uppercase font-bold text-[16px]">
                    Thorpad
                </label>
            </div>
            <div className="box-border flex gap-2 justify-center items-center h-full w-fit">
                {tools.map(({ id, name, icon }) => (
                    <ToolItem key={id} id={id} name={name} icon={icon} onClick={handleTools} />
                ))}
            </div>
            <div className="box-border flex gap-2 justify-center items-center h-full w-fit">
                <ToolValues words={words} chars={chars} />
            </div>
        </div>
    );
};

export default Toolbar;
