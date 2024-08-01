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
    const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});
    const [radioStates, setRadioStates] = useState<{ [key: string]: string | null }>({});

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
        <div className='mb-10'>
            <h3 className='mb-2'>{content.label}</h3>
            {content.options.map((option) => (
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
                    <div className={`mb-2 ${!checkboxStates[option] ? 'text-gray-400' : ''}`}>
                        <label className='mr-2'>
                            <input
                                type="radio"
                                name={option}
                                value="Alterado"
                                ref={inputRefs[option + "_alterado"]}
                                checked={radioStates[option] === 'Alterado'}
                                onChange={() => handleRadioChange(option, 'Alterado')}
                                disabled={!checkboxStates[option]}
                                className='mr-1'
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
                                disabled={!checkboxStates[option]}
                                className='mr-1'
                            />
                            Não alterado
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Question;
