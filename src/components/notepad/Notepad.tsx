'use client'


const Notepad = () => {
    return (
        <div className="relative box-border bg-background-notepad drop-shadow-ds-001 rounded-notepad 
        flex justify-start items-start m-auto h-[88%] lg:h-[85%] w-[95%] before:content-'' before:absolute 
        before:top-0 before:bottom-0 before:left-0 before:w-[60px] before:bg-paper-size before:box-border 
        before:border-r-[1px] before:border-red-600 before:bg-paper-balls before:bg-repeat-y p-2 overflow-hidden">
            <textarea className="bg-transparent bg-paper-content bg-paper-size top-[30px] bottom-[30px] right-0 
            left-[60px] p-2 pl-4 absolute outline-none resize-none leading-[31px] bg-local h-[92%] w-[95%] bg-repeat
            overflow-hidden overflow-y-auto text-[16px]">
            </textarea>
        </div>
    );
}
 
export default Notepad;
