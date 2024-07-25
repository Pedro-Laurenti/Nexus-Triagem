
interface TextInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLTextAreaElement>;
}

const TextInput: React.FC<TextInputProps> = ({ TittleInput, inputRef }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <textarea
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    ref={inputRef}
                />
            </label>
        </div>
    );
};

export default TextInput