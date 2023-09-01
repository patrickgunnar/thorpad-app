'use client'

import { useEffect, useState } from "react";
import Notepad from "../notepad/Notepad";
import Toolbar from "../toolbar/Toolbar";
import Cookies from "js-cookie";
import useNotetaking from "@/hooks/useNotetaking";


const ClientSide = () => {
    // notetaking hook
    const { setContent } = useNotetaking()
    // check if is the client side
    const [isClientSide, setIsClientSide] = useState<boolean>(false);

    useEffect(() => {
        setContent(localStorage.getItem('thorpadData') ?? '')
        setIsClientSide(true);
    }, [setContent]);

    if(!isClientSide) return <div>Loading...</div>

    return (
        <main className="flex flex-col justify-start items-center box-border h-full w-full">
            <Toolbar />
            <Notepad />
        </main>
    );
}
 
export default ClientSide;
