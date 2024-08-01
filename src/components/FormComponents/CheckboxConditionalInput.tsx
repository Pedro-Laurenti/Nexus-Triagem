import React, { useState } from 'react';

interface CheckboxConditionalInputProps {
    TituloCheckbox: string;
    mainCheckboxRef: React.RefObject<HTMLInputElement>;
    alteredCheckboxRef: React.RefObject<HTMLInputElement>;
    notAlteredCheckboxRef: React.RefObject<HTMLInputElement>;
}

const CheckboxConditionalInput: React.FC<CheckboxConditionalInputProps> = ({ TituloCheckbox, mainCheckboxRef, alteredCheckboxRef, notAlteredCheckboxRef }) => {
    const [isMainChecked, setIsMainChecked] = useState<boolean>(false);
    const [selectedSecondary, setSelectedSecondary] = useState<'alterado' | 'nãoAlterado' | null>(null);

    const handleMainCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setIsMainChecked(isChecked);
        if (!isChecked) {
            setSelectedSecondary(null); // Desmarcar opções secundárias se o principal for desmarcado
        }
    };

    const handleSecondaryChange = (type: 'alterado' | 'nãoAlterado') => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelectedSecondary(type);
        } else {
            setSelectedSecondary(null);
        }
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    ref={mainCheckboxRef}
                    checked={isMainChecked}
                    onChange={handleMainCheckboxChange}
                />
                {TituloCheckbox}
            </label>
            <div className="mb-6">
                <label style={{ color: isMainChecked ? 'inherit' : 'gray' }}>
                    <input
                        type="checkbox"
                        ref={alteredCheckboxRef}
                        checked={selectedSecondary === 'alterado'}
                        onChange={handleSecondaryChange('alterado')}
                    />
                    Alterado
                </label>
                <label className="ml-4" style={{ color: isMainChecked ? 'inherit' : 'gray' }}>
                    <input
                        type="checkbox"
                        ref={notAlteredCheckboxRef}
                        checked={selectedSecondary === 'nãoAlterado'}
                        onChange={handleSecondaryChange('nãoAlterado')}
                    />
                    Não Alterado
                </label>
            </div>
        </div>
    );
};

export default CheckboxConditionalInput;