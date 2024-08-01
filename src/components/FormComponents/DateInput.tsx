import { ChangeEvent } from "react";
import { Track, InputMask } from "@react-input/mask";

interface DateInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

const track: Track = ({ inputType, data, selectionStart }) => {
    if (inputType === 'insert' && /^\d/.test(data) && (selectionStart === 2 || selectionStart === 5)) {
        return `/${data}`;
    }
    return data;
};

const DateInput: React.FC<DateInputProps> = ({ TittleInput, inputRef }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Aqui você pode adicionar qualquer lógica adicional para o campo de data, se necessário
    };

    return (
        <label>
            {TittleInput}
            <InputMask
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                placeholder="dd / mm / aaaa"
                mask="__ / __ / ____"
                replacement={{ _: /\d/ }}
                track={track}
                onChange={handleInputChange}
                ref={inputRef}
            />
        </label>
    );
};

export default DateInput;