"use client"

import { IconType } from "react-icons";


interface ToolItemProps {
    id: string
    name: string
    icon: IconType
    onClick: (id: string) => void
}

const ToolItem: React.FC<ToolItemProps> = ({ id, name, icon: Icon, onClick }) => {
    return (
        <button className="relative box-border flex justify-center items-center mx-auto md:mx-2 h-full aspect-square 
        rounded-tools-radius hover:bg-[var(--colour--008)] hover:before:content-[attr(dataset-name)] 
        hover:before:absolute hover:before:top-[125%] hover:before:py-1 hover:before:px-2 hover:before:rounded-tools-radius
        hover:before:bg-background-toolbar hover:before:h-fit hover:before:w-fit hover:before:drop-shadow-ds-001"
        onClick={() => onClick(id)} dataset-name={name}>
            <Icon className="h-[70%] w-fit" />
        </button>
    );
}
 
export default ToolItem;
