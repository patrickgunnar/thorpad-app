'use client'

import { useEffect, useState } from "react";
import Notepad from "../notepad/Notepad";
import Toolbar from "../toolbar/Toolbar";
import useNotetaking from "@/hooks/useNotetaking";
import InputModal from "../modal/InputModal";
import AboutModal from "../modal/AboutModal";
import { Toaster } from "react-hot-toast";
import Loader from "../loading/Loader";
import Startup from "../startup/Startup";


const ClientSide = () => {
    // notetaking hook
    const { setContent } = useNotetaking()
    // check if is the client side
    const [isClientSide, setIsClientSide] = useState<boolean>(false);
    // startup msg
    const [isStartup, setIsStartup] = useState<boolean>(true)

    useEffect(() => {
        setContent(localStorage.getItem('thorpadData') ?? '')
        setIsClientSide(true);
    }, [setContent]);

    if(!isClientSide) return <Loader />

    // startup handler
    const handleStartup = () => setIsStartup(false)

    return (
        <main className="flex flex-col justify-start items-center box-border h-full w-full">
            <Toolbar />
            <Notepad />
            <InputModal />
            <AboutModal />
            <Toaster />
            {
                isStartup && <Startup onClose={handleStartup} />
            }
        </main>
    );
}
 
export default ClientSide;
