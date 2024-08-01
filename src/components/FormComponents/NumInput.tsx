import { useState, ChangeEvent } from "react";

interface NumInputProps {
    TittleInput: string;
    PlaceHolder: string;
    inputRef: React.Ref<HTMLInputElement>;
}

const NumInput: React.FC<NumInputProps> = ({ TittleInput, PlaceHolder, inputRef }) => {

    return (
        <label className="w-full">
            <section>
                {TittleInput}
                <input
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={PlaceHolder}
                    type="number"
                    ref={inputRef}
                />
            </section>
        </label>
    );
};

export default NumInput
