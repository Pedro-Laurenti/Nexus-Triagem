import { useState, ChangeEvent } from "react";

interface NumInputProps {
    TittleInput: string;
    PlaceHolder: string;
    maxValue: number;
    maxAlgarismo: number;
    inputRef: React.Ref<HTMLInputElement>;
}

const NumInput: React.FC<NumInputProps> = ({ TittleInput, PlaceHolder, maxValue, maxAlgarismo, inputRef }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value;

        // Verificar se o comprimento dos dígitos não excede maxAlgarismo
        if (newValue.length > maxAlgarismo) {
            newValue = newValue.slice(0, maxAlgarismo);
        }

        // Verificar se o valor está dentro do limite máximo permitido
        if (newValue === '' || (parseInt(newValue) >= 0 && parseInt(newValue) <= maxValue)) {
            setValue(newValue);
        }
    };

    return (
        <label className="w-full">
            <section>
                {TittleInput}
                <input
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={PlaceHolder}
                    type="number"
                    value={value}
                    onChange={handleChange}
                    max={maxValue}
                    ref={inputRef}
                />
            </section>
        </label>
    );
};

export default NumInput
