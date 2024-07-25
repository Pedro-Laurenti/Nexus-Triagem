
interface SimpleTextInputProps {
    TittleInput: string;
    placeholder: string;
    inputRef: React.Ref<HTMLTextAreaElement>;
}

const SimpleTextInput: React.FC<SimpleTextInputProps> = ({ TittleInput, placeholder, inputRef }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <textarea
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={placeholder}
                    ref={inputRef}
                />
            </label>
        </div>
    );
};

export default SimpleTextInput