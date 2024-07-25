import { useState } from "react";

interface CheckboxOption {
    id: string;
    name: string;
    label: string;
    radios: string[];
    isChecked: boolean;
    selectedRadio?: string;
}

interface TriagemNeonatalProps {
    initialCheckboxes: CheckboxOption[];
}

const TriagemNeonatal: React.FC<TriagemNeonatalProps> = ({ initialCheckboxes }) => {
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

export default TriagemNeonatal