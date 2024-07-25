import { Track, InputMask } from "@react-input/mask";

interface ContactInputProps {
    TittleInput: string;
    inputRef: React.Ref<HTMLInputElement>;
}


const ContactInput: React.FC<ContactInputProps> = ({ TittleInput, inputRef }) => {
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

export default ContactInput