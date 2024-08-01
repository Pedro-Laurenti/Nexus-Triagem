import React, { useRef, useEffect } from 'react';
import { SubtittleForm, TittleForm } from '../Tittles';
import GroupSelectInput from '../FormComponents/GroupSelectInput';
import GroupSelectTextInput from '../FormComponents/GroupSelectTextInput';
import NumInput from '../FormComponents/NumInput';
import SimpleTextInput from '../FormComponents/SimpleTextInput';
import CheckboxConditionalInput from '../FormComponents/CheckboxConditionalInput';

interface FormSection6Props{
    inputRefs: {
        [key: string]: any;
    };
}

const FormSection6: React.FC<FormSection6Props> = ({ inputRefs }) => {

    const idadeParto = [
        {
            label: 'Prematuro',
            options: [
                { value: 'Prematuro extremo: menos de 28 semanas', content: 'Extremo: menos de 28 semanas' },
                { value: 'Prematuro moderado: 28 a 34 semanas', content: 'Moderado: 28 a 34 semanas' },
                { value: 'Prematuro tardio: 34 a 36 semanas', content: 'Tardio: 34 a 36 semanas' }
            ]
        },
        {
            label: 'Termo',
            options: [
                { value: 'Termo precoce: 37 a 38 semanas e 6 dias', content: 'Precoce: 37 a 38 semanas e 6 dias' },
                { value: 'Termo pleno: 39 a 40 semanas e 6 dias', content: 'Pleno: 39 a 40 semanas e 6 dias' },
                { value: 'Termo tardio: 41 a 42 semanas', content: 'Tardio: 41 a 42 semanas' }
            ]
        }
    ]

    const tipoParto = [
        {
            options: [
                { value: 'Cesáreo', content: 'Cesáreo' },
                { value: 'Natural', content: 'Natural' },
                { value: 'Fórceps', content: 'Fórceps' }
            ]
        }
    ]

    const basicbool = [
        {
            options: [
                { value: 'Sim', content: 'Sim' },
                { value: 'Não', content: 'Não' }
            ]
        }
    ]

    const CondicionalQuest = [
        {
            options: [
                { value: "Não", content: "Não" },
                { value: "Sim", content: "Sim", isKeyOption: true },
            ]
        }
    ];

    return (
        <div>

            <TittleForm Tittle={'6. HISTÓRICO GESTACIONAL E NATAL'} />
            <div className="py-2 px-8 mb-5">
                <GroupSelectInput titleInput="Semanas de gestação:" options={idadeParto} inputRef={inputRefs.historicoGestacionalIdadeParto} />

                <GroupSelectInput titleInput="Tipo de parto" options={tipoParto} inputRef={inputRefs.historicoGestacionalTipoParto} />

                <div className="flex flex-row gap-6 items-center">
                    <NumInput
                        TittleInput={'APGAR 1º min:'}
                        PlaceHolder={'1 - 10'}
                        inputRef={inputRefs.historicoGestacionalApgar1}
                    />
                    <NumInput
                        TittleInput={'APGAR 5º min:'}
                        PlaceHolder={'1 - 10'}
                        inputRef={inputRefs.historicoGestacionalApgar2}
                    />
                </div>
                <div className="flex flex-row gap-6 items-center">
                    <NumInput
                        TittleInput={'Peso ao Nascer:'}
                        PlaceHolder={'Ex: 1000,5 g'}
                        inputRef={inputRefs.historicoGestacionalPesoAoNascer}
                    />
                    <NumInput
                        TittleInput={'Altura ao Nascer:'}
                        PlaceHolder={'1 - 10'}
                        inputRef={inputRefs.historicoGestacionalAlturaAoNascer}
                    />
                </div>

                <GroupSelectInput titleInput="Gestação foi planejada?" options={basicbool} inputRef={inputRefs.historicoGestacionalInfosPlanejada} />
                <GroupSelectInput titleInput="Gestação foi desejada?" options={basicbool} inputRef={inputRefs.historicoGestacionalInfosDesejada} />
                <GroupSelectTextInput 
                    titleInput="Uso de substâncias durante a gestação?"
                    options={CondicionalQuest}
                    inputRef={inputRefs.historicoGestacionalInfosUsodeSubstancia}
                    inputRef2={inputRefs.historicoGestacionalInfosQuaisSubstacias}
                />

                <SubtittleForm SubTittle={'Intercorrências/complicações:'} />

                <GroupSelectTextInput 
                    titleInput="Durante o período de gestação?"
                    options={CondicionalQuest}
                    inputRef={inputRefs.historicoGestacionalComplicDurantePeriodo}
                    inputRef2={inputRefs.historicoGestacionalComplicQuaisDurantePeriodo}
                />

                <GroupSelectTextInput 
                    titleInput="Durante o parto?"
                    options={CondicionalQuest}
                    inputRef={inputRefs.historicoGestacionalComplicDuranteParto}
                    inputRef2={inputRefs.historicoGestacionalComplicQuaisDuranteParto}
                />

                <GroupSelectTextInput 
                    titleInput="Após o nascimento?"
                    options={CondicionalQuest}
                    inputRef={inputRefs.historicoGestacionalComplicAposNascimento}
                    inputRef2={inputRefs.historicoGestacionalComplicQuaisAposNascimento}
                />

                <SubtittleForm SubTittle={'Triagem neonatal'} />

                <CheckboxConditionalInput
                    mainCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalPezinho}
                    notAlteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalPezinhoNormal}
                    alteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalPezinhoAlterado}
                    TituloCheckbox={"Teste do Olhinho"}
                />

                <CheckboxConditionalInput
                    mainCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalOlhinho}
                    notAlteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalOlhinhoNormal}
                    alteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalOlhinhoAlterado}
                    TituloCheckbox={"Teste do Pezinho"}
                />

                <CheckboxConditionalInput
                    mainCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalOrelhinha}
                    notAlteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalOrelhinhaNormal}
                    alteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalOrelhinhaAlterado}
                    TituloCheckbox={"Teste da Orelhinha"}
                />

                <CheckboxConditionalInput
                    mainCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalLinguinha}
                    notAlteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalLinguinhaNormal}
                    alteredCheckboxRef={inputRefs.historicoGestacionalTriagemNeonatalLinguinhaAlterado}
                    TituloCheckbox={"Teste da Linguinha"}
                />

                <SubtittleForm SubTittle={'Observações'} />

                <SimpleTextInput
                    TittleInput={'Observações acerca dos acompanhamentos anteriores'}
                    placeholder={'Escreva as observações aqui.'}
                    inputRef={inputRefs.historicoGestacionalObservacoesAcompanhamentos}
                />

                <SimpleTextInput
                    TittleInput={'Observações Pertinentes'}
                    placeholder={'Escreva as observações aqui.'}
                    inputRef={inputRefs.historicoGestacionalObservacoesPertinentes}
                />
            </div>

        </div>
    )
}

export default FormSection6