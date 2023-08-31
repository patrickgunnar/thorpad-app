'use client'

import { useEffect, useState } from "react";
import Notepad from "../notepad/Notepad";
import Toolbar from "../toolbar/Toolbar";


const ClientSide = () => {
    // check if is the client side
    const [isClientSide, setIsClientSide] = useState(false);

    useEffect(() => {
        setIsClientSide(true);
    }, []);

    if(!isClientSide) return <div>Loading...</div>

    return (
        <main className="flex flex-col justify-start items-center box-border h-full w-full">
            <Toolbar />
            <Notepad />
        </main>
    );
}
 
export default ClientSide;
