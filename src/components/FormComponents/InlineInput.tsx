interface InlineInputProps {
    TittleInput: string;
    PlaceHolder: string;
    inputRef: React.Ref<HTMLInputElement>;
}

const InlineInput: React.FC<InlineInputProps> = ({ TittleInput, PlaceHolder, inputRef }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <input
                    ref={inputRef}
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={PlaceHolder}
                    type="text"
                />
            </label>
        </div>
    );
};

export default InlineInput;