"use client"

const ErrorX = () => {
    return (
        <div className="relative flex flex-col gap-2 justify-center items-center h-fit w-fit top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <span className="flex h-fit w-fit text-red-500 text-base font-bold animate-ping">
                Error
            </span>
            <label className="text-sm text-red-600 font-semibold">
                Something wrong just happened
            </label>
        </div>
    );
}
 
export default ErrorX;
