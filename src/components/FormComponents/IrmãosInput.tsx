import { useState, useImperativeHandle, forwardRef, ChangeEvent, Ref } from "react";

interface IrmãosInputProps {
    initialSiblings?: string[];
}

// Define the type for the ref object
interface IrmãosInputRef {
    getSiblings: () => string[];
}

const IrmãosInput = forwardRef<IrmãosInputRef, IrmãosInputProps>((props, ref) => {
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

export default IrmãosInput;