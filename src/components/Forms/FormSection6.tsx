import React, { useRef } from 'react';
import { SubtittleForm, TittleForm } from '../Tittles';
import BooleanRadioInput from '../FormComponents/BooleanRadioInput';
import GroupSelectInput from '../FormComponents/GroupSelectInput';
import NumInput from '../FormComponents/NumInput';
import SimpleTextInput from '../FormComponents/SimpleTextInput';
import TriagemNeonatal from '../FormComponents/TriagemNeonatal';


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

    const tipodeParto = [
        {
            options: [
                { value: 'Cesáreo', content: 'Cesáreo' },
                { value: 'Natural', content: 'Natural' },
                { value: 'Fórceps', content: 'Fórceps' }
            ]
        }
    ]

    const boolGestacao = [
        {
            question: 'A gestação foi planejada?',
            name: 'gestacao-planejada',
            options: ['Sim', 'Não']
        },
        {
            question: 'A gestação foi desejada?',
            name: 'gestacao-desejada',
            options: ['Sim', 'Não']
        },
        {
            question: 'Uso de substâncias durante a gestação?',
            name: 'gestacao-substancias',
            options: ['Sim', 'Não'],
            followUp: {
                value: 'sim',
                question: 'Quais?',
                inputType: 'text',
                name: 'gestacao-substanciasdetalhes',
                ref: useRef(null)
            }
        }
    ];

    const boolComplicacoes = [
        {
            question: 'Durante o período de gestação?',
            name: 'complicacoes-durantegestacao',
            options: ['Sim', 'Não'],
            followUp: {
                value: 'sim',
                question: 'Quais?',
                inputType: 'text',
                name: 'complicacoes1Details',
                ref: useRef(null)
            }
        },
        {
            question: 'Durante o parto?',
            name: 'complicacoes-duranteparto',
            options: ['Sim', 'Não'],
            followUp: {
                value: 'sim',
                question: 'Quais?',
                inputType: 'text',
                name: 'complicacoes2Details',
                ref: useRef(null)
            }
        },
        {
            question: 'Após o nascimento?',
            name: 'complicacoes-aposnascimento',
            options: ['Sim', 'Não'],
            followUp: {
                value: 'sim',
                question: 'Quais?',
                inputType: 'text',
                name: 'complicacoes3Details',
                ref: useRef(null)
            }
        }
    ];

    const triagemNeonatal = [
        {   id: 'Neonatal-pezinho',
            name: 'Neonatal-pezinho',
            label: 'Teste do Pezinho',
            radios: ['Normal', 'Alterado'],
            isChecked: false
        },
        { 
            id: 'Neonatal-olhinho',
            name: 'Neonatal-olhinho',
            label: 'Teste do Olhinho',
            radios: ['Normal', 'Alterado'],
            isChecked: false
        },
        {
            id: 'Neonatal-orelhinha',
            name: 'Neonatal-orelhinha',
            label: 'Teste da Orelhinha',
            radios: ['Normal', 'Alterado'],
            isChecked: false
        },
        {
            id: 'Neonatal-linguinha',
            name: 'Neonatal-linguinha',
            label: 'Teste da Linguinha',
            radios: ['Normal', 'Alterado'],
            isChecked: false
        }
    ];


    return (
        <div>

            <TittleForm Tittle={'6. HISTÓRICO GESTACIONAL E NATAL'} />
            <div className="py-2 px-8 mb-5">
                <GroupSelectInput titleInput="Semanas de gestação:" options={idadeParto} inputRef={inputRefs.selectedGestacao} />

                <GroupSelectInput titleInput="Tipo de parto" options={tipodeParto} inputRef={inputRefs.selectedParto} />

                <div className="flex flex-row gap-6 items-center">
                    <NumInput
                        TittleInput={'APGAR 1º min:'}
                        PlaceHolder={'1 - 10'}
                        maxValue={10}
                        maxAlgarismo={2}
                        inputRef={inputRefs.Apgar1}
                    />
                    <NumInput
                        TittleInput={'APGAR 5º min:'}
                        PlaceHolder={'1 - 10'}
                        maxValue={10}
                        maxAlgarismo={2}
                        inputRef={inputRefs.Apgar2}
                    />
                </div>
                <div className="flex flex-row gap-6 items-center">
                    <NumInput
                        TittleInput={'Peso ao Nascer:'}
                        PlaceHolder={'Ex: 1000,5 g'}
                        maxValue={7000}
                        maxAlgarismo={5}
                        inputRef={inputRefs.PesoAoNascer}
                    />
                    <NumInput
                        TittleInput={'Altura ao Nascer:'}
                        PlaceHolder={'1 - 10'}
                        maxValue={80}
                        maxAlgarismo={2}
                        inputRef={inputRefs.AlturaAoNascer}
                    />
                </div>

                <BooleanRadioInput questions={boolGestacao} />

                <SubtittleForm SubTittle={'Intercorrências/complicações:'} />
                <BooleanRadioInput questions={boolComplicacoes} />

                <TriagemNeonatal initialCheckboxes={triagemNeonatal} />

                <SimpleTextInput
                    TittleInput={'Observações acerca dos acompanhamentos anteriores'}
                    placeholder={'Escreva as observações aqui.'}
                    inputRef={inputRefs.ObservacoesAcompanhamentos}
                />
                <SimpleTextInput
                    TittleInput={'Observações Pertinentes'}
                    placeholder={'Escreva as observações aqui.'}
                    inputRef={inputRefs.ObservacoesPertinentes}
                />
            </div>

        </div>
    )
}

export default FormSection6