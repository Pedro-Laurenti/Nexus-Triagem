import React, { useRef, useState } from 'react';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';
import FormSection4 from './FormSection4';
import FormSection5 from './FormSection5';
import FormSection6 from './FormSection6';
import FormSection7 from './FormSection7';
import Tabs from '../Tabs';

interface Profissional {
    id: number;
    nome: string;
    senha: string;
    especialidade: string;
    formação: string;
    NdoConselho: string;
}

interface FormIndexProps {
    profissional: Profissional;
    idForm: string;
}

type InputRefs = {
    [key: string]: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
};

const FormIndex: React.FC<FormIndexProps> = ({ profissional, idForm }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        'Identificação',
        'Diagnóstico',
        'Disciplinas',
        'Histórico',
        'Demandas',
        'Gestacional',
        'Saúde',
    ];

    const inputRefs: InputRefs = {
        ProfissionalNome: useRef<HTMLInputElement>(null),
        ProfissionalEspecialidade: useRef<HTMLInputElement>(null),
        ProfissionalNdoConselho: useRef<HTMLInputElement>(null),
        ProfissionalFormação: useRef<HTMLInputElement>(null),
        nome: useRef<HTMLInputElement>(null),
        dataNascimento: useRef<HTMLInputElement>(null),
        peso: useRef<HTMLInputElement>(null),
        altura: useRef<HTMLInputElement>(null),
        nomePai: useRef<HTMLInputElement>(null),
        nomeMãe: useRef<HTMLInputElement>(null),
        contato: useRef<HTMLInputElement>(null),
        irmãos: useRef<HTMLTextAreaElement>(null),
        Radio1IndicaçãoDiagnóstica: useRef<HTMLTextAreaElement>(null),
        Radio1HipóteseDiagnóstica: useRef<HTMLTextAreaElement>(null),
        Radio1DiagnósticoConcluido: useRef<HTMLTextAreaElement>(null),
        observacoesDiagnosticos: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqPsicologia: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqTerapiaOcupacional: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqFisioterapia: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqMusicoterapia: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqFonoaudiologia: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqNeuropsicologia: useRef<HTMLTextAreaElement>(null),
        DisciplinasReqPsicomotricidade: useRef<HTMLTextAreaElement>(null),
        NomeEncaminhadoPor: useRef<HTMLTextAreaElement>(null),
        DataUltimaConsulta: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProPsicologia: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProFonoaudiologia: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProTerapiaOcupacional: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProFisioterapia: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProNeuropsicologia: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProPsicomotricidade: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProMusicoterapia: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProNutricionista: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProAvaliaçãoNeuropsicológica: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProGeneticista: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProPsiquiatra: useRef<HTMLTextAreaElement>(null),
        AcompanhamentosProDentista: useRef<HTMLTextAreaElement>(null),
        observacoesAcompanhamentosAnteriores: useRef<HTMLTextAreaElement>(null),
        DemandasPrincipais: useRef<HTMLTextAreaElement>(null),
        selectedGestacao: useRef<HTMLTextAreaElement>(null),
        selectedParto: useRef<HTMLTextAreaElement>(null),
        Apgar1: useRef<HTMLTextAreaElement>(null),
        Apgar2: useRef<HTMLTextAreaElement>(null),
        PesoAoNascer: useRef<HTMLTextAreaElement>(null),
        AlturaAoNascer: useRef<HTMLTextAreaElement>(null),
        ObservacoesAcompanhamentos: useRef<HTMLTextAreaElement>(null),
        ObservacoesPertinentes: useRef<HTMLTextAreaElement>(null),
    };

    const formSection7Ref = useRef<{ getData: () => Selection[] }>(null);

    const handleGeneratePDF = () => {
        const formData = Object.keys(inputRefs).reduce((values, key) => {
            const ref = inputRefs[key as keyof InputRefs];
            if (ref.current) {
                values[key] = ref.current.value;
            }
            return values;
        }, {} as { [key: string]: any });

        if (formSection7Ref.current) {
            formData['FormSection7'] = formSection7Ref.current.getData();
        }

        console.log('formData:', formData);
    };

    return (
        <div className="bg-white p-5 flex flex-col items-center" id={idForm}>
            <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {selectedTab === 0 && <FormSection1 inputRefs={inputRefs} profissional={profissional} />}
            {selectedTab === 1 && <FormSection2 inputRefs={inputRefs} />}
            {selectedTab === 2 && <FormSection3 inputRefs={inputRefs} />}
            {selectedTab === 3 && <FormSection4 inputRefs={inputRefs} />}
            {selectedTab === 4 && <FormSection5 inputRefs={inputRefs} />}
            {selectedTab === 5 && <FormSection6 inputRefs={inputRefs} />}
            {selectedTab === 6 && <FormSection7 inputRefs={formSection7Ref} />}

            <button onClick={handleGeneratePDF} className="bg-green-500 text-white px-5 py-2 rounded-lg">
                Gerar PDF
            </button>
        </div>
    );
};

export default FormIndex;
