import React, { useState, useImperativeHandle, forwardRef, Ref, ChangeEvent } from 'react';
import { InputMask, type Track } from '@react-input/mask';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SubtittleForm } from '../Tittles';

// Interfaces para props dos componentes
interface InlineInputProps {
    TittleInput: string;
    PlaceHolder: string;
    inputRef: React.Ref<HTMLInputElement>;
}

interface InlineInputFixedProps {
    TittleInput: string;
    PlaceHolder: string;
    inputRef: React.Ref<HTMLInputElement>;
    valueInputFixed: string;
}

interface DateInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

interface DateInputOutputProps {
    TittleInput: string;
    birthdate: string;
    setBirthdate: React.Dispatch<React.SetStateAction<string>>;
    age: { years: number; months: number; days: number };
    setAge: React.Dispatch<React.SetStateAction<{ years: number; months: number; days: number }>>;
    validDate: boolean;
    setValidDate: React.Dispatch<React.SetStateAction<boolean>>;
    inputRef: React.Ref<HTMLInputElement>;
}

interface NumInputProps {
    TittleInput: string;
    PlaceHolder: string;
    maxValue: number;
    maxAlgarismo: number;
    inputRef: React.Ref<HTMLInputElement>;
}

interface ContactInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

interface IrmãosInputProps {
    initialSiblings?: string[];
}

interface IrmãosInputRef {
    getSiblings: () => string[];
}

interface TextInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLTextAreaElement>;
}

interface RichTextInputProps {
    titleInput: string;
}

interface RadioInputProps {
    TittleInput: string;
    NameRadioInput: string;
    IdRadioInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

interface SimpleTextInputProps {
    TittleInput: string;
    placeholder: string;
    inputRef: React.Ref<HTMLTextAreaElement>;
}

interface OptionGroup {
    label?: string;
    options: { value: string; content: string }[];
}

interface GroupSelectInputProps {
    titleInput: string;
    options: OptionGroup[];
    inputRef: React.Ref<HTMLSelectElement>;
}

interface CheckBoxInputProps {
    TittleInput: string;
    NameCheckInput: string;
    IdCheckInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

interface FollowUp {
    question: string;
    inputType: string;
    name: string;
    ref: React.Ref<HTMLInputElement>;
    value: string;
}

interface Question {
    question: string;
    name: string;
    options: string[];
    followUp?: FollowUp;
}

interface BooleanRadioInputProps {
    questions: Question[];
}

interface CheckboxOption {
    id: string;
    label: string;
    isChecked: boolean;
    radios: string[];
    selectedRadio?: string;
}

interface TriagemNeonatalProps {
    initialCheckboxes: CheckboxOption[];
}

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
}

// Componentes

export const InlineInput: React.FC<InlineInputProps> = ({ TittleInput, PlaceHolder, inputRef }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <input
                    ref={inputRef}
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={PlaceHolder}
                    type="text"
                />
            </label>
        </div>
    );
};

export const InlineInputFixed: React.FC<InlineInputFixedProps> = ({ TittleInput, PlaceHolder, inputRef, valueInputFixed }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <input
                    ref={inputRef}
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={PlaceHolder}
                    type="text"
                    value={valueInputFixed}
                    readOnly
                />
            </label>
        </div>
    );
};

export const DateInput: React.FC<DateInputProps> = ({ TittleInput, inputRef }) => {
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

export const DateInputOutput: React.FC<DateInputOutputProps> = ({ TittleInput, birthdate, setBirthdate, age, setAge, validDate, setValidDate, inputRef }) => {

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
            />
        </label>
    );
};

export const NumInput: React.FC<NumInputProps> = ({ TittleInput, PlaceHolder, maxValue, maxAlgarismo, inputRef }) => {
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

export const ContactInput: React.FC<ContactInputProps> = ({ TittleInput, inputRef }) => {
    const track: Track = ({ inputType, value, data, selectionStart, selectionEnd }) => {
        if (inputType === 'insert' && !/^\D*/.test(data) && selectionStart <= 1) {
            return `1${data}`;
        }

        if (inputType !== 'insert' && selectionStart <= 1 && selectionEnd < value.length) {
            if (selectionEnd > 2) {
                return '1';
            }
            if (selectionEnd === 2) {
                return false;
            }
        }

        return data;
    };

    return (
        <label>
            {TittleInput}
            <InputMask
                className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-4"
                placeholder="(00) 00000-0000"
                mask="(__) _____-____"
                replacement={{ _: /\d/ }}
                track={track}
                ref={inputRef}
            />
        </label>
    );
};

export const IrmãosInput = forwardRef<IrmãosInputRef, IrmãosInputProps>((props, ref) => {
    const [siblings, setSiblings] = useState<string[]>(props.initialSiblings || ['']);

    useImperativeHandle(ref, () => ({
        getSiblings: () => siblings,
    }));

    const addSiblingInput = () => {
        setSiblings([...siblings, '']);
    };

    const removeSiblingInput = (index: number) => {
        const updatedSiblings = siblings.filter((_, idx) => idx !== index);
        setSiblings(updatedSiblings);
    };

    const handleSiblingInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const updatedSiblings = siblings.map((sibling, idx) =>
            idx === index ? event.target.value : sibling
        );
        setSiblings(updatedSiblings);
    };

    return (
        <div>
            <label>Irmãos:</label>
            {siblings.map((sibling, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        className="border border-slate-300 rounded px-4 py-2 text-slate-600 mr-2 flex-1"
                        type="text"
                        value={sibling}
                        onChange={(event) => handleSiblingInputChange(index, event)}
                        placeholder={`Nome do irmão ${index + 1}`}
                    />
                    {siblings.length > 1 && (
                        <button
                            type="button"
                            className="text-red-500"
                            onClick={() => removeSiblingInput(index)}
                        >
                            Remover
                        </button>
                    )}
                </div>
            ))}
            <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={addSiblingInput}
            >
                Adicionar Irmão
            </button>
        </div>
    );
});

export const TextInput: React.FC<TextInputProps> = ({ TittleInput, inputRef }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <textarea
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    ref={inputRef}
                />
            </label>
        </div>
    );
};

export const RichTextInput: React.FC<RichTextInputProps> = ({ titleInput }) => {
    const [editorData, setEditorData] = useState<string>('');

    const handleEditorChange = (_event: any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
    };

    return (
        <div>
            <label>
                {titleInput}
                <CKEditor
                    editor={ClassicEditor}
                    data={editorData}
                    onChange={handleEditorChange}
                />
            </label>
        </div>
    );
};

export const RadioInput: React.FC<RadioInputProps> = ({ TittleInput, NameRadioInput, IdRadioInput, inputRef }) => {
    return (
        <label>
            <input type="radio" name={NameRadioInput} id={IdRadioInput} ref={inputRef} />
            {TittleInput}
        </label>
    );
};

export const SimpleTextInput: React.FC<SimpleTextInputProps> = ({ TittleInput, placeholder, inputRef }) => {
    return (
        <div>
            <label>
                {TittleInput}
                <textarea
                    className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                    placeholder={placeholder}
                    ref={inputRef}
                />
            </label>
        </div>
    );
};

export const GroupSelectInput: React.FC<GroupSelectInputProps> = ({ titleInput, options, inputRef }) => {
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

export const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ TittleInput, NameCheckInput, IdCheckInput, inputRef }) => {
    return (
        <label>
            <input type="checkbox" name={NameCheckInput} id={IdCheckInput} ref={inputRef} />
            {TittleInput}
        </label>
    );
};

export const BooleanRadioInput: React.FC<BooleanRadioInputProps> = ({ questions }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [showFollowUp, setShowFollowUp] = useState<{ [key: string]: boolean }>({});

    const handleOptionChange = (questionName: string, option: string, followUpName: string) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [questionName]: option,
        }));

        if (followUpName) {
            setShowFollowUp((prevState) => ({
                ...prevState,
                [followUpName]: option === 'Sim',
            }));
        }
    };

    return (
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <SubtittleForm SubTittle={question.question} />
                    <div className="mb-4">
                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="mr-4">
                                <input
                                    type="radio"
                                    name={question.name}
                                    value={option}
                                    checked={selectedOptions[question.name] === option}
                                    onChange={() =>
                                        handleOptionChange(question.name, option, question.followUp?.name || '')
                                    }
                                    className="mr-1"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    {question.followUp && showFollowUp[question.followUp.name] && (
                        <div className="ml-4 mb-4">
                            {question.followUp.inputType === 'text' ? (
                                <label>
                                    {question.followUp.question}
                                    <input
                                        type="text"
                                        name={question.followUp.name}
                                        ref={question.followUp.ref}
                                        className="border border-slate-300 rounded px-4 py-2 w-full text-slate-600 mb-6"
                                    />
                                </label>
                            ) : (
                                <></>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export const TriagemNeonatal: React.FC<TriagemNeonatalProps> = ({ initialCheckboxes }) => {
    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

    const handleCheckboxChange = (index: number, isChecked: boolean) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].isChecked = isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleRadioChange = (index: number, selectedRadio: string) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].selectedRadio = selectedRadio;
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div>
            <h2>Triagem Neonatal</h2>
            {checkboxes.map((checkbox, index) => (
                <div key={checkbox.id} className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={checkbox.isChecked}
                            onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                            className="mr-2"
                        />
                        {checkbox.label}
                    </label>
                    {checkbox.isChecked && checkbox.radios && (
                        <div className="ml-4">
                            {checkbox.radios.map((radio) => (
                                <label key={radio} className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`radio-${checkbox.id}`}
                                        value={radio}
                                        checked={checkbox.selectedRadio === radio}
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

export const ExamesSelect: React.FC<ExamesSelectProps> = ({ initialSelects }) => {
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
