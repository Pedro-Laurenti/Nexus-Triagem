import React from 'react';
import { TittleForm } from '../Tittles';
import { Question } from '../FormComponents/ExamesSelect';

interface FormSection7Props {
    inputRefs: { [key: string]: React.RefObject<HTMLInputElement> };
}

const FormSection7: React.FC<FormSection7Props> = ({ inputRefs }) => {

    const questions = [
        {
            label: 'Audiológicos',
            options: [
                'Audiometria',
                'Imitanciometria',
                'PEATE / BERA',
                'Emissão Otoacústicas'
            ],
        },
        {
            label: 'Oftalmológico',
            options: [
                'Acuidade Visual',
                'Tonometria'
            ],
        },
        {
            label: 'Eletrodiagnósticos',
            options: [
                'Eletrocardiograma',
                'Eletroencefalograma',
                'Eletromiografia',
                'Potenciais Evocados'
            ],
        },
        {
            label: 'Função Pulmonar',
            options: [
                'Espirometria',
                'Capacidade Vital Forçada',
                'Volume respiratório',
                'Teste de Broncodilatação',
                'Tomografia toráxica'
            ],
        },
    ];

    return (
        <div>
            <TittleForm Tittle={'7. HISTÓRICO DE SAÚDE'} />
            <div className="py-2 px-8 mb-4">
                {questions.map((question, index) => (
                    <Question
                        key={index}
                        content={question}
                        inputRefs={inputRefs}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormSection7;