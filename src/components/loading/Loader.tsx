"use client";

const Loader = () => {
    return (
        <div className="relative flex justify-center items-center h-fit w-fit top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <span className="transform rotate-45 perspective-[1000px] rounded-[50%] h-[100px] aspect-square before:content-'' 
            before:block before:absolute before:top-0 before:left-0 before:h-[100px] before:aspect-square before:rounded-[50%] 
            before:rotate-x-70 before:animate-spin"></span>
        </div>
    );
};

export default Loader;
