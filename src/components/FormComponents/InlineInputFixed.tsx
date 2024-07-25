import React from 'react';

interface InlineInputFixedProps {
    TittleInput: string;
    PlaceHolder: string;
    inputRef: React.RefObject<HTMLInputElement>;
    valueInputFixed: string;
}

const InlineInputFixed: React.FC<InlineInputFixedProps> = ({ TittleInput, PlaceHolder, inputRef, valueInputFixed }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={PlaceHolder}
                    type="text"
                    value={valueInputFixed}
                    readOnly
                />
            </label>
        </div>
    );
};

export default InlineInputFixed;
