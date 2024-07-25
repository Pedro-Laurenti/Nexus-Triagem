import React, { useState } from 'react';

interface SelectOption {
    id: string;
    label: string;
    options: string[];
    selected: string;
    radios: string[];
    selectedRadio?: string;
}

interface ExamesSelectProps {
    initialSelects: SelectOption[];
    onUpdate: (updatedSelects: SelectOption[]) => void;
}

const ExamesSelect: React.FC<ExamesSelectProps> = ({ initialSelects }) => {
    const [selects, setSelects] = useState(initialSelects);

    const handleSelectChange = (index: number, selected: string) => {
        const updatedSelects = [...selects];
        updatedSelects[index].selected = selected;
        setSelects(updatedSelects);
    };

    const handleRadioChange = (index: number, selectedRadio: string) => {
        const updatedSelects = [...selects];
        updatedSelects[index].selectedRadio = selectedRadio;
        setSelects(updatedSelects);
    };

    return (
        <div>
            <h2>Exames Select</h2>
            {selects.map((select, index) => (
                <div key={select.id} className="mb-4">
                    <label>
                        {select.label}
                        <select
                            value={select.selected}
                            onChange={(e) => handleSelectChange(index, e.target.value)}
                            className="ml-2 border border-slate-300 rounded px-4 py-2 text-slate-600 mb-4"
                        >
                            {select.options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </label>
                    {select.selected === 'Sim' && (
                        <div className="ml-4">
                            {select.radios.map((radio) => (
                                <label key={radio} className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`radio-${select.id}`}
                                        value={radio}
                                        checked={select.selectedRadio === radio}
                                        onChange={() => handleRadioChange(index, radio)}
                                        className="mr-2"
                                    />
                                    {radio}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExamesSelect;

/*


interface SelectOption {
    id: string;
    label: string;
    options: string[];
    selected: string;
    radios: string[];
    selectedRadio?: string;
}

interface ExamesSelectProps {
    initialSelects: SelectOption[];
    onUpdate: (updatedSelects: SelectOption[]) => void;
}


    export const ExamesSelect: React.FC<ExamesSelectProps> = ({ initialSelects, onUpdate }) => {
        const [selects, setSelects] = useState(initialSelects);

        const handleSelectChange = (index: number, selected: string) => {
            const updatedSelects = [...selects];
            updatedSelects[index].selected = selected;
            setSelects(updatedSelects);
            onUpdate(updatedSelects); // Notify parent component of the update
        };

        const handleRadioChange = (index: number, selectedRadio: string) => {
            const updatedSelects = [...selects];
            updatedSelects[index].selectedRadio = selectedRadio;
            setSelects(updatedSelects);
            onUpdate(updatedSelects); // Notify parent component of the update
        };

        return (
            <div>
                <h2>Exames Select</h2>
                {selects.map((select, index) => (
                    <div key={select.id} className="mb-4">
                        <label>
                            {select.label}
                            <select
                                value={select.selected}
                                onChange={(e) => handleSelectChange(index, e.target.value)}
                                className="ml-2 border border-slate-300 rounded px-4 py-2 text-slate-600 mb-4"
                            >
                                {select.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {select.selected === 'Sim' && (
                            <div className="ml-4">
                                {select.radios.map((radio) => (
                                    <label key={radio} className="flex items-center">
                                        <input
                                            type="radio"
                                            name={`radio-${select.id}`}
                                            value={radio}
                                            checked={select.selectedRadio === radio}
                                            onChange={() => handleRadioChange(index, radio)}
                                            className="mr-2"
                                        />
                                        {radio}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

*/