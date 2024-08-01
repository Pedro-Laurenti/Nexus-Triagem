import { useState } from 'react';
import { TittleForm, SubtittleForm } from '../Tittles';
import ContactInput from '../FormComponents/ContactInput';
import DateInputOutput from '../FormComponents/DateInputOutput';
import InlineInput from '../FormComponents/InlineInput';
import InlineInputFixed from '../FormComponents/InlineInputFixed';
import IrmãosInput from '../FormComponents/IrmãosInput';
import NumInput from '../FormComponents/NumInput';

interface Profissional {
    profissionalId: number;
    profissionalNome: string;
    profissionalSenha: string;
    profissionalEspecialidade: string;
    profissionalFormacao: string;
    profissionalNdoConselho: string;
}

interface FormSection1Props {
    profissional: Profissional;
    inputRefs: {
        [key: string]: React.RefObject<HTMLInputElement>;
    };
}

const FormSection1: React.FC<FormSection1Props> = ({ profissional, inputRefs }) => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
    const [validDate, setValidDate] = useState(true);

    return (
        <div className='w-full'>
            <TittleForm Tittle={'1. IDENTIFICAÇÃO'} />
            <div className="py-2 px-8">
                <SubtittleForm SubTittle={'Identificação de Autoria:'} />
                <InlineInputFixed
                    TittleInput={'Profissional'}
                    valueInputFixed={profissional.profissionalNome}
                    inputRef={inputRefs.profissionalNome}
                    PlaceHolder='Nome do profissional'
                />
                <InlineInputFixed
                    TittleInput={'Especialidade'}
                    valueInputFixed={profissional.profissionalEspecialidade}
                    inputRef={inputRefs.profissionalEspecialidade}
                    PlaceHolder='Especialidade'
                />
                <InlineInputFixed
                    TittleInput={'Nº do Conselho'}
                    valueInputFixed={profissional.profissionalNdoConselho}
                    inputRef={inputRefs.profissionalNdoConselho}
                    PlaceHolder='Nº do conselho'
                />
                <InlineInputFixed
                    TittleInput={'Formação'}
                    valueInputFixed={profissional.profissionalFormacao}
                    inputRef={inputRefs.profissionalFormacao}
                    PlaceHolder='Formação do profissional'
                />
            </div>
            
            <div className="py-2 px-8 mb-4">
                <SubtittleForm SubTittle={'Identificação do Paciente:'} />

                <InlineInput
                    TittleInput={'Nome do paciente'}
                    PlaceHolder={'Nome'}
                    inputRef={inputRefs.identificaçãoNomePaciente}
                />

                <DateInputOutput
                    TittleInput="Data de nascimento"
                    birthdate={birthdate}
                    setBirthdate={setBirthdate}
                    age={age}
                    setAge={setAge}
                    validDate={validDate}
                    setValidDate={setValidDate}
                    inputRef={inputRefs.identificaçãoDataNascimentoPaciente}
                    inputRefIdade={inputRefs.identificaçãoIdadePaciente}
                />

                <div className="grid grid-cols-2 gap-4 place-items-begin align-bottom">
                    <NumInput
                        TittleInput={'Peso'}
                        PlaceHolder={'00,00 kg'}
                        inputRef={inputRefs.identificaçãoPesoPaciente}
                    />
                    <NumInput
                        TittleInput={'Altura'}
                        PlaceHolder={'00,00 m'}
                        inputRef={inputRefs.identificaçãoAlturaPaciente}
                    />
                </div>

                <InlineInput
                    TittleInput={'Nome do pai'}
                    PlaceHolder={'Nome'}
                    inputRef={inputRefs.identificaçãoNomePaiPaciente}
                />

                <InlineInput
                    TittleInput={'Nome da mãe'}
                    PlaceHolder={'Nome'}
                    inputRef={inputRefs.identificaçãoNomeMãePaciente}
                />

                <ContactInput TittleInput={'Contato dos responsáveis'} inputRef={inputRefs.identificaçãoContatoPaciente} />

                {/* <IrmãosInput inputRef={inputRefs.identificaçãoIrmaosPaciente} /> */}
            </div>
        </div>
    );
};

export default FormSection1;
