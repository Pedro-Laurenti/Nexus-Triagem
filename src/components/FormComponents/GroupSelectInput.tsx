
interface OptionGroup {
    label?: string;
    options: { value: string; content: string }[];
}

interface GroupSelectInputProps {
    titleInput: string;
    options: OptionGroup[];
    inputRef: React.Ref<HTMLSelectElement>;
}

const GroupSelectInput: React.FC<GroupSelectInputProps> = ({ titleInput, options, inputRef }) => {
    return (
        <label>
            {titleInput}
            <select
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                ref={inputRef}
            >
                {options.map((group, index) => (
                    <optgroup key={index} label={group.label}>
                        {group.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option.value}>
                                {option.content}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </label>
    );
};

export default GroupSelectInput