import React, { useState, useEffect, useRef } from 'react';

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
        setIsMainChecked(event.target.checked);
        if (!event.target.checked) {
            setSelectedSecondary(null); // Desmarcar opções secundárias se o principal for desmarcado
        }
    };

    const handleSecondaryChange = (type: 'alterado' | 'nãoAlterado') => () => {
        setSelectedSecondary(type);
    };

    useEffect(() => {
        if (mainCheckboxRef.current) {
            setIsMainChecked(mainCheckboxRef.current.checked);
        }
        if (alteredCheckboxRef.current?.checked) {
            setSelectedSecondary('alterado');
        } else if (notAlteredCheckboxRef.current?.checked) {
            setSelectedSecondary('nãoAlterado');
        }
    }, [mainCheckboxRef, alteredCheckboxRef, notAlteredCheckboxRef]);

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
            <div style={{ height: isMainChecked ? 'auto' : '0', overflow: 'hidden' }}>
                <div className="mb-6">
                    <label>
                        <input
                            type="checkbox"
                            ref={alteredCheckboxRef}
                            checked={selectedSecondary === 'alterado'}
                            onChange={handleSecondaryChange('alterado')}
                        />
                        Alterado
                    </label>
                    <label className="ml-4">
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
        </div>
    );
};

export default CheckboxConditionalInput;
