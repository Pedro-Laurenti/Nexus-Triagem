import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { TittleForm } from '../Tittles';
import ExamesSelect from '../FormComponents/ExamesSelect';

interface SelectOption {
    id: string;
    label: string;
    options: string[];
    selected: string;
    radios: string[];
    selectedRadio?: string;
}

interface FormSection7Props {
    inputRefs: {
        [key: string]: any;
    };
}

const FormSection7: React.FC<FormSection7Props> = ({ inputRefs }) => {
    const [selects] = useState<SelectOption[]>([
        {
            id: '1',
            label: 'Audiológicos',
            options: [
                'Não Realizou',
                'Realizado',
                'Audiometria',
                'Imitanciometria',
                'PEATE / BERA',
                'Emissão Otoacústicas'
            ],
            selected: 'Não Realizou',
            radios: ['Alterado', 'Não Alterado']
        },
        {
            id: '2',
            label: 'Oftalmológico',
            options: ['Não Realizou', 'Acuidade Visual', 'Tonometria'],
            selected: 'Não Realizou',
            radios: ['Alterado', 'Não Alterado']
        },
        {
            id: '3',
            label: 'Eletrodiagnósticos',
            options: [
                'Não Realizou',
                'Realizado',
                'Eletrocardiograma',
                'Eletroencefalograma',
                'Eletromiografia',
                'Potenciais Evocados'
            ],
            selected: 'Não Realizou',
            radios: ['Alterado', 'Não Alterado']
        },
        {
            id: '4',
            label: 'Função Pulmonar',
            options: [
                'Não Realizou',
                'Realizado',
                'Espirometria',
                'Capacidade Vital Forçada',
                'Volume respiratório',
                'Teste de Broncodilatação',
                'Tomografia toráxica'
            ],
            selected: 'Não Realizou',
            radios: ['Alterado', 'Não Alterado']
        }
    ]);

    return (
        <div>
            <TittleForm Tittle={'7. HISTÓRICO DE SAÚDE'} />
            <div className="py-2 px-8 mb-4">
                <ExamesSelect initialSelects={selects} inputRefs={inputRefs.historicoSaude} />
            </div>
        </div>
    );
};

export default FormSection7;