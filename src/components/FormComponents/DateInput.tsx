
interface DateInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

const DateInput: React.FC<DateInputProps> = ({ TittleInput, inputRef }) => {
    return (
        <label>
            {TittleInput}
            <input
                ref={inputRef}
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                type="date"
            />
        </label>
    );
};

export default DateInput
