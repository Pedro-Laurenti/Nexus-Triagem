import { ChangeEvent } from "react";
import { Track, InputMask } from "@react-input/mask";

interface DateInputOutputProps {
    TittleInput: string;
    birthdate: string;
    setBirthdate: React.Dispatch<React.SetStateAction<string>>;
    age: {
        years: number;
        months: number;
        days: number;
    };
    setAge: React.Dispatch<React.SetStateAction<{ years: number; months: number; days: number }>>;
    validDate: boolean;
    setValidDate: React.Dispatch<React.SetStateAction<boolean>>;
    inputRef: React.Ref<HTMLInputElement>;
    inputRefIdade: React.Ref<HTMLInputElement>;
}

const track: Track = ({ inputType, data, selectionStart }) => {
    if (inputType === 'insert' && /^\d/.test(data) && (selectionStart === 2 || selectionStart === 5)) {
        return `/${data}`;
    }
    return data;
};

const DateInputOutput: React.FC<DateInputOutputProps> = ({ TittleInput, birthdate, setBirthdate, age, setAge, validDate, setValidDate, inputRef, inputRefIdade }) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedDate = event.target.value;
        const [day, month, year] = selectedDate.split('/').map(Number);

        if (day && month && year) {
            const birthDate = new Date(year, month - 1, day);
            const today = new Date();
            const isValid = birthDate <= today;
            setValidDate(isValid);

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
                years--;
                months += 12;
            }

            if (days < 0) {
                const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += prevMonth.getDate();
                months--;
            }
            setAge({ years, months, days });
        } else {
            setValidDate(false);
        }

        setBirthdate(selectedDate);
    };

    // Formatar a idade para string
    const ageString = validDate ? `${age.years} anos, ${age.months} meses e ${age.days} dias` : 'Data inválida';

    return (
        <div>
            <label>
                {TittleInput}
                <InputMask
                    className={`border border-slate-300 rounded mb-4 px-4 py-2 w-full text-slate-600 ${!validDate ? 'border-red-500' : ''}`}
                    placeholder="dd / mm / aaaa"
                    mask="__ / __ / ____"
                    replacement={{ _: /\d/ }}
                    track={track}
                    value={birthdate}
                    onChange={handleInputChange}
                    ref={inputRef}
                />
            </label>
            <input
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                placeholder="Idade calculada"
                type="text"
                value={ageString}
                ref={inputRefIdade}
                readOnly
            />
        </div>
    );
};

export default DateInputOutput;