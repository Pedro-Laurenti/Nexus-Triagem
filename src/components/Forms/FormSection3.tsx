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
                    inputRef={inputRefs.DisciplinasReqPsicologia}
                />
                <CheckBoxInput
                    TittleInput={"Terapia ocupacional"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"TerapiaOcupacional"}
                    inputRef={inputRefs.DisciplinasReqTerapiaOcupacional}
                />
                <CheckBoxInput
                    TittleInput={"Fisioterapia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Fisioterapia"}
                    inputRef={inputRefs.DisciplinasReqFisioterapia}
                />
                <CheckBoxInput
                    TittleInput={"Musicoterapia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Musicoterapia"}
                    inputRef={inputRefs.DisciplinasReqMusicoterapia}
                />
                <CheckBoxInput
                    TittleInput={"Fonoaudiologia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Fonoaudiologia"}
                    inputRef={inputRefs.DisciplinasReqFonoaudiologia}
                />
                <CheckBoxInput
                    TittleInput={"Neuropsicologia"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Neuropsicologia"}
                    inputRef={inputRefs.DisciplinasReqNeuropsicologia}
                />
                <CheckBoxInput
                    TittleInput={"Psicomotricidade"}
                    NameCheckInput={"disciplinas"}
                    IdCheckInput={"Psicomotricidade"}
                    inputRef={inputRefs.DisciplinasReqPsicomotricidade}
                />
            </div>
        </div>
    )
}

export default FormSection3