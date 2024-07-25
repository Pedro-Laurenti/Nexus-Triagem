import { TittleForm } from '../Tittles';
import RichTextInput from '../FormComponents/RichTextInput';

interface FormSection5Props{
    inputRefs: {
        [key: string]: any;
    };
}

const FormSection5: React.FC<FormSection5Props> = ({ inputRefs }) => {

    return (
        <div>
            <TittleForm Tittle={'5. DEMANDAS PRINCIPAIS RELATADAS'} />
            <div className="px-8 my-10">
                <RichTextInput className={'mb-10'} inputRef={inputRefs.demandasPrincipais} />
            </div>
        </div>
    )
}

export default FormSection5