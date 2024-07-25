import CheckBoxInput from '../FormComponents/CheckBoxInput';
import { TittleForm } from '../Tittles';

interface FormSection3Props{
    inputRefs: {
        [key: string]: any;
    };
}

const FormSection3: React.FC<FormSection3Props> = ({ inputRefs }) => {

    return (
        <div>
            <TittleForm Tittle={'3. DISCIPLINAS REQUERIDAS'} />
            <div className="py-2 px-8 mt-2 mb-10 grid grid-cols-3 gap-4 justify-between">
                <CheckBoxInput
                    TittleInput={"Psicologia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Psicologia"}
                    inputRef={inputRefs.disciplinasReqPsicologia}
                />
                <CheckBoxInput
                    TittleInput={"Terapia ocupacional"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"TerapiaOcupacional"}
                    inputRef={inputRefs.disciplinasReqTerapiaOcupacional}
                />
                <CheckBoxInput
                    TittleInput={"Fisioterapia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Fisioterapia"}
                    inputRef={inputRefs.disciplinasReqFisioterapia}
                />
                <CheckBoxInput
                    TittleInput={"Musicoterapia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Musicoterapia"}
                    inputRef={inputRefs.disciplinasReqMusicoterapia}
                />
                <CheckBoxInput
                    TittleInput={"Fonoaudiologia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Fonoaudiologia"}
                    inputRef={inputRefs.disciplinasReqFonoaudiologia}
                />
                <CheckBoxInput
                    TittleInput={"Neuropsicologia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Neuropsicologia"}
                    inputRef={inputRefs.disciplinasReqNeuropsicologia}
                />
                <CheckBoxInput
                    TittleInput={"Psicomotricidade"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Psicomotricidade"}
                    inputRef={inputRefs.disciplinasReqPsicomotricidade}
                />
            </div>
        </div>
    )
}

export default FormSection3