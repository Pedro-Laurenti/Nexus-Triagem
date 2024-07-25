
interface CheckBoxInputProps {
    TittleInput: string;
    NameCheckInput: string;
    IdCheckInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ TittleInput, NameCheckInput, IdCheckInput, inputRef }) => {
    return (
        <label>
            <input type="checkbox" name={NameCheckInput} id={IdCheckInput} ref={inputRef} />
            {TittleInput}
        </label>
    );
};

export default CheckBoxInput;