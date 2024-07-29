import React, { useState } from 'react';

interface Option {
    label: string;
    options: string[];
}

interface QuestionProps {
    content: Option;
    inputRefs: { [key: string]: React.RefObject<HTMLInputElement> };
}

export const Question: React.FC<QuestionProps> = ({ content, inputRefs }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});
    const [radioStates, setRadioStates] = useState<{ [key: string]: string | null }>({});

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        if (e.target.value === "Não realizou") {
            content.options.forEach(option => {
                setCheckboxStates(prevState => ({
                    ...prevState,
                    [option]: false
                }));
                setRadioStates(prevState => ({
                    ...prevState,
                    [option]: null
                }));
            });
        }
    };

    const handleCheckboxChange = (option: string) => {
        setCheckboxStates((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
        setRadioStates((prevState) => ({
            ...prevState,
            [option]: null
        }));
    };

    const handleRadioChange = (option: string, value: string) => {
        setRadioStates((prevState) => ({
            ...prevState,
            [option]: value,
        }));
    };

    return (
        <div>
            <h3>{content.label}</h3>
            <select onChange={handleSelectChange}>
                <option value="">Selecione</option>
                <option value="Realizou">Realizou</option>
                <option value="Não realizou">Não realizou</option>
            </select>

            {selectedOption === 'Realizou' &&
                content.options.map((option) => (
                    <div key={option}>
                        <label>
                            <input
                                type="checkbox"
                                ref={inputRefs[option + "_checkbox"]}
                                onChange={() => handleCheckboxChange(option)}
                                checked={checkboxStates[option] || false}
                            />
                            {option}
                        </label>
                        {checkboxStates[option] && (
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name={option}
                                        value="Alterado"
                                        ref={inputRefs[option + "_alterado"]}
                                        checked={radioStates[option] === 'Alterado'}
                                        onChange={() => handleRadioChange(option, 'Alterado')}
                                    />
                                    Alterado
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={option}
                                        value="Não alterado"
                                        ref={inputRefs[option + "_nao_alterado"]}
                                        checked={radioStates[option] === 'Não alterado'}
                                        onChange={() => handleRadioChange(option, 'Não alterado')}
                                    />
                                    Não alterado
                                </label>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Question;
