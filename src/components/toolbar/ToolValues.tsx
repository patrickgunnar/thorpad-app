"use client";

interface ToolValuesProps {
    words: number;
    chars: number;
}

const ToolValues: React.FC<ToolValuesProps> = ({ words, chars }) => {
    return (
        <div className="box-border flex gap-2 justify-center items-center h-full w-fit text-sm">
            <label>Chars:</label>
            <label className="font-bold">{chars},</label>
            <label>Words:</label>
            <label className="font-bold">{words}</label>
        </div>
    );
};

export default ToolValues;
