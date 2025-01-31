import RadioInput from '../FormComponents/RadioInput';
import SimpleTextInput from '../FormComponents/SimpleTextInput';
import { TittleForm } from '../Tittles';

interface FormSection2Props{
    inputRefs: {
        [key: string]: any;
    }
}

const FormSection2: React.FC<FormSection2Props> = ({ inputRefs }) => {

    return (
        <div>
            <TittleForm Tittle={'2. DIAGNÓSTICO/HIPÓTESE DIAGNÓSTICA'} />
            
            <div className="py-2 px-8 mt-2 flex justify-between">
                <RadioInput
                    TittleInput={'Sem indicação diagnóstica'}
                    NameRadioInput={'diagnostico'}
                    IdRadioInput={'diagnostico'}
                    inputRef={inputRefs.diagnosticoIndicaçãoDiagnóstica}
                />
                <RadioInput
                    TittleInput={'Hipótese diagnóstica'}
                    NameRadioInput={'diagnostico'}
                    IdRadioInput={'diagnostico'}
                    inputRef={inputRefs.diagnosticoHipoteseDiagnostica}
                />
                <RadioInput
                    TittleInput={'Diagnóstico concluído'}
                    NameRadioInput={'diagnostico'}
                    IdRadioInput={'diagnostico'}
                    inputRef={inputRefs.diagnosticoDiagnosticoConcluido}
                />
            </div>

            <div className="py-2 px-8 mt-2">
                <SimpleTextInput
                    TittleInput={'Observações sobre o diagnóstico'}
                    placeholder={'Escreva as observações aqui.'}
                    inputRef={inputRefs.diagnosticoObservacoesDiagnosticos}
                />
            </div>
        </div>
    )
}

export default FormSection2