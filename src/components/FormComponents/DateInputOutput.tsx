import { ChangeEvent } from "react";

interface DateInputOutputProps {
    TittleInput: string;
    birthdate: string;
    setBirthdate: React.Dispatch<React.SetStateAction<string>>;
    age: {
        years: number;
        months: number;
        days: number
    };
    setAge: React.Dispatch<React.SetStateAction<{ years: number; months: number; days: number }>>;
    validDate: boolean;
    setValidDate: React.Dispatch<React.SetStateAction<boolean>>;
    inputRef: React.Ref<HTMLInputElement>;
}

const DateInputOutput: React.FC<DateInputOutputProps> = ({ TittleInput, birthdate, setBirthdate, age, setAge, validDate, setValidDate, inputRef }) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedDate = event.target.value;
        setBirthdate(selectedDate);

        const today = new Date();
        const birthDate = new Date(selectedDate);
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
    };

    return (
        <label>
            {TittleInput}
            <input
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                type="date"
                value={birthdate}
                onChange={handleInputChange}
                ref={inputRef}
                min="1950-01-01"
                max="12-31-2024"
            />
        </label>
    );
};


export default DateInputOutput