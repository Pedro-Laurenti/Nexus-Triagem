import CheckBoxInput from '../FormComponents/CheckBoxInput';
import DateInput from '../FormComponents/DateInput';
import InlineInput from '../FormComponents/InlineInput';
import SimpleTextInput from '../FormComponents/SimpleTextInput';
import { TittleForm } from '../Tittles';

interface FormSection4Props{
    inputRefs: {
        [key: string]: any;
    };
}

const FormSection4: React.FC<FormSection4Props> = ({ inputRefs }) => {

    return (
        <div>
            <TittleForm Tittle={'4. HISTÓRICO DE ACOMPANHAMENTO'} />
            <div className="py-2 px-8 mt-2">
                <InlineInput
                    TittleInput={'Encaminhado por'}
                    PlaceHolder={'Nome'}
                    inputRef={inputRefs.NomeEncaminhadoPor}
                />
                <DateInput
                    TittleInput={'Data da última consulta'}
                    inputRef={inputRefs.DataUltimaConsulta}
                />

                <span className="mt-5">Acompanhamentos profissionais já realizados anteriormente</span>
                <div className="py-2 my-3 lg:grid grid-cols-3 gap-4 justify-between">
                    <CheckBoxInput
                        TittleInput={'Psicologia'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProPsicologia}
                    />
                    <CheckBoxInput
                        TittleInput={'Fonoaudiologia'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProFonoaudiologia}
                    />
                    <CheckBoxInput
                        TittleInput={'Terapia ocupacional'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProTerapiaOcupacional}
                    />
                    <CheckBoxInput
                        TittleInput={'Fisioterapia'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProFisioterapia}
                    />
                    <CheckBoxInput
                        TittleInput={'Neuropsicologia'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProNeuropsicologia}
                    />
                    <CheckBoxInput
                        TittleInput={'Psicomotricidade'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProPsicomotricidade}
                    />
                    <CheckBoxInput
                        TittleInput={'Musicoterapia'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProMusicoterapia}
                    />
                    <CheckBoxInput
                        TittleInput={'Nutricionista'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProNutricionista}
                    />
                    <CheckBoxInput
                        TittleInput={'Avaliação Neuropsicológica'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProAvaliaçãoNeuropsicológica}
                    />
                    <CheckBoxInput
                        TittleInput={'Geneticista'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProGeneticista}
                    />
                    <CheckBoxInput
                        TittleInput={'Psiquiatra'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProPsiquiatra}
                    />
                    <CheckBoxInput
                        TittleInput={'Dentista'}
                        NameCheckInput={'acompanhamentos'}
                        IdCheckInput={'acompanhamentos'}
                        inputRef={inputRefs.AcompanhamentosProDentista}
                    />
                </div>

                <SimpleTextInput
                    TittleInput={'Observações acerca dos acompanhamentos anteriores'}
                    placeholder={'Escreva as observações aqui.'}
                    inputRef={inputRefs.observacoesAcompanhamentosAnteriores}
                />
            </div>
        </div>
    )
}

export default FormSection4