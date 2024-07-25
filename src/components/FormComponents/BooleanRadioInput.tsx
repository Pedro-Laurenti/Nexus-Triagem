import { useState } from "react";
import { SubtittleForm } from "../Tittles";

interface FollowUp {
    value: string;
    question: string;
    inputType: string;
    name: string;
    ref: any;
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

const BooleanRadioInput: React.FC<BooleanRadioInputProps> = ({ questions }) => {
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

export default BooleanRadioInput;