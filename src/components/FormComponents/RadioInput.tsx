
interface RadioInputProps {
    TittleInput: string;
    NameRadioInput: string;
    IdRadioInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

const RadioInput: React.FC<RadioInputProps> = ({ TittleInput, NameRadioInput, IdRadioInput, inputRef }) => {
    return (
        <label>
            <input type="radio" name={NameRadioInput} id={IdRadioInput} ref={inputRef} />
            {TittleInput}
        </label>
    );
};

export default RadioInput
