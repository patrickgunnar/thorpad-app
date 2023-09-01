'use client'


const Notepad = () => {
    return (
        <div className="relative box-border bg-background-notepad drop-shadow-ds-001 rounded-notepad 
        flex justify-start items-start m-auto h-[88%] lg:h-[85%] w-[95%] before:content-'' before:absolute 
        before:top-0 before:bottom-0 before:left-0 md:before:w-[30px] xl:before:w-[60px] before:bg-paper-size 
        before:box-border md:before:border-r-[1px] md:before:border-red-600 before:bg-paper-balls before:bg-repeat-y 
        p-2 overflow-hidden">
            <textarea className="bg-transparent bg-paper-content bg-paper-size top-[30px] bottom-[30px] md:right-0 
            md:left-[30px] xl:left-[60px] p-2 md:pl-4 absolute outline-none resize-none leading-[31px] bg-local h-[92%] 
            w-[95%] bg-repeat overflow-hidden overflow-y-auto text-[16px] m-auto">
            </textarea>
        </div>
    );
}
 
export default Notepad;
