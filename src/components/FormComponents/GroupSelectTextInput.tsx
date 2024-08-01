import React, { useState, useRef } from 'react';

interface OptionGroup {
    label?: string;
    options: { value: string; content: string; isKeyOption?: boolean }[];
}

interface GroupSelectTextInputProps {
    titleInput: string;
    options: OptionGroup[];
    inputRef: React.RefObject<HTMLSelectElement>;
    inputRef2: React.RefObject<HTMLInputElement>;
}

const GroupSelectTextInput: React.FC<GroupSelectTextInputProps> = ({ titleInput, options, inputRef, inputRef2 }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isKeyOptionSelected, setIsKeyOptionSelected] = useState<boolean>(false);
    const [textValue, setTextValue] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);

        const option = options.flatMap(group => group.options).find(option => option.value === value);
        if (option && option.isKeyOption) {
            setIsKeyOptionSelected(true);
        } else {
            setIsKeyOptionSelected(false);
            setTextValue('');
        }
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    };

    return (
        <label>
            {titleInput}
            <select
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-4"
                ref={inputRef}
                onChange={handleSelectChange}
                value={selectedOption || ''}
            >
                {options.map((group, index) => (
                    <optgroup key={index} label={group.label}>
                        {group.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option.value} data-is-key={option.isKeyOption}>
                                {option.content}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
            <input
                type="text"
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                value={textValue}
                onChange={handleTextChange}
                placeholder="Digite aqui..."
                ref={inputRef2}
                disabled={!isKeyOptionSelected} // Desabilitar o input se não for uma opção-chave
                style={{ color: isKeyOptionSelected ? 'inherit' : 'gray', backgroundColor: isKeyOptionSelected ? 'white' : '#f0f0f0' }} // Estilo para aparência cinza
            />
        </label>
    );
};

export default GroupSelectTextInput;