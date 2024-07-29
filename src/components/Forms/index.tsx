import React, { useRef, useState, useEffect } from 'react';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';
import FormSection4 from './FormSection4';
import FormSection5 from './FormSection5';
import FormSection6 from './FormSection6';
import FormSection7 from './FormSection7';
import Tabs from '../Tabs';

interface Profissional {
    profissionalId: number;
    profissionalNome: string;
    profissionalSenha: string;
    profissionalEspecialidade: string;
    profissionalFormacao: string;
    profissionalNdoConselho: string;
}

interface FormIndexProps {
    profissional: Profissional;
    idForm: string;
}

type InputRefs = {
    [key: string]: any;
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

    // Initialize refs for each input
    const inputRefs: InputRefs = {
        profissionalNome: useRef<HTMLInputElement>(null),
        profissionalEspecialidade: useRef<HTMLInputElement>(null),
        profissionalNdoConselho: useRef<HTMLInputElement>(null),
        profissionalFormacao: useRef<HTMLInputElement>(null),
        identificaçãoNomePaciente: useRef<HTMLInputElement>(null),
        identificaçãoDataNascimentoPaciente: useRef<HTMLInputElement>(null),
        identificaçãoPesoPaciente: useRef<HTMLInputElement>(null),
        identificaçãoAlturaPaciente: useRef<HTMLInputElement>(null),
        identificaçãoNomePaiPaciente: useRef<HTMLInputElement>(null),
        identificaçãoNomeMãePaciente: useRef<HTMLInputElement>(null),
        identificaçãoContatoPaciente: useRef<HTMLInputElement>(null),
        identificaçãoIrmaosPacientePaciente: useRef<HTMLTextAreaElement>(null),
        diagnosticoIndicaçãoDiagnóstica: useRef<HTMLTextAreaElement>(null),
        diagnosticoHipoteseDiagnostica: useRef<HTMLTextAreaElement>(null),
        diagnosticoDiagnosticoConcluido: useRef<HTMLTextAreaElement>(null),
        diagnosticoObservacoesDiagnosticos: useRef<HTMLTextAreaElement>(null),
        disciplinasReqPsicologia: useRef<HTMLTextAreaElement>(null),
        disciplinasReqTerapiaOcupacional: useRef<HTMLTextAreaElement>(null),
        disciplinasReqFisioterapia: useRef<HTMLTextAreaElement>(null),
        disciplinasReqMusicoterapia: useRef<HTMLTextAreaElement>(null),
        disciplinasReqFonoaudiologia: useRef<HTMLTextAreaElement>(null),
        disciplinasReqNeuropsicologia: useRef<HTMLTextAreaElement>(null),
        disciplinasReqPsicomotricidade: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosNomeEncaminhadoPor: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosDataUltimaConsulta: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProPsicologia: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProFonoaudiologia: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProTerapiaOcupacional: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProFisioterapia: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProNeuropsicologia: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProPsicomotricidade: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProMusicoterapia: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProNutricionista: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProAvaliaçãoNeuropsicológica: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProGeneticista: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProPsiquiatra: useRef<HTMLTextAreaElement>(null),
        historicoAcompanhamentosProDentista: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalObservacoesAcompanhamentosAnteriores: useRef<HTMLTextAreaElement>(null),
        demandasPrincipais: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalIdadeParto: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalTipoParto: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalApgar1: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalApgar2: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalPesoAoNascer: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalAlturaAoNascer: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalObservacoesAcompanhamentos: useRef<HTMLTextAreaElement>(null),
        historicoGestacionalObservacoesPertinentes: useRef<HTMLTextAreaElement>(null),
    };

    // Add refs for FormSection7 inputs
    const section7Refs: InputRefs = {};
    const section7Questions = [
        'Audiometria',
        'Imitanciometria',
        'PEATE / BERA',
        'Emissão Otoacústicas',
        'Acuidade Visual',
        'Tonometria',
        'Eletrocardiograma',
        'Eletroencefalograma',
        'Eletromiografia',
        'Potenciais Evocados',
        'Espirometria',
        'Capacidade Vital Forçada',
        'Volume respiratório',
        'Teste de Broncodilatação',
        'Tomografia toráxica'
    ];

    section7Questions.forEach((question) => {
        section7Refs[question + "_checkbox"] = useRef<HTMLInputElement>(null);
        section7Refs[question + "_alterado"] = useRef<HTMLInputElement>(null);
        section7Refs[question + "_nao_alterado"] = useRef<HTMLInputElement>(null);
    });

    const allInputRefs = { ...inputRefs, ...section7Refs };

    // Load form data from localStorage when component mounts
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            console.log('Dados carregados do localStorage:', parsedData);
            Object.keys(parsedData).forEach((key) => {
                if (allInputRefs[key as keyof InputRefs]?.current) {
                    allInputRefs[key as keyof InputRefs]!.current!.value = parsedData[key];
                    allInputRefs[key as keyof InputRefs]!.current!.checked = parsedData[key] === "true";
                }
            });
        }
    }, [allInputRefs]);

    // Save form data to localStorage whenever inputs change
    useEffect(() => {
        const handleBeforeUnload = () => {
            const formData = Object.keys(allInputRefs).reduce((acc, key) => {
                const ref = allInputRefs[key as keyof InputRefs];
                if (ref.current) {
                    if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                        acc[key] = ref.current.checked.toString();
                    } else {
                        acc[key] = ref.current.value;
                    }
                }
                return acc;
            }, {} as { [key: string]: any });

            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Dados salvos no localStorage:', formData);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [allInputRefs]);

    const handleGeneratePDF = () => {
        const formData = Object.keys(allInputRefs).reduce((values, key) => {
            const ref = allInputRefs[key as keyof InputRefs];
            if (ref.current) {
                if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                    values[key] = ref.current.checked.toString();
                } else {
                    values[key] = ref.current.value;
                }
            }
            return values;
        }, {} as { [key: string]: any });
        console.log('Dados do formulário:', formData);

        // Adicione a lógica para geração do PDF aqui
        // Por exemplo: 
        // generatePDF(formData);
    };

    return (
        <div className="bg-white p-5 flex flex-col items-center" id={idForm}>
            <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className="tab-content">
                <div style={{ display: selectedTab === 0 ? 'block' : 'none' }}>
                    <FormSection1 inputRefs={inputRefs} profissional={profissional} />
                </div>
                <div style={{ display: selectedTab === 1 ? 'block' : 'none' }}>
                    <FormSection2 inputRefs={inputRefs} />
                </div>
                <div style={{ display: selectedTab === 2 ? 'block' : 'none' }}>
                    <FormSection3 inputRefs={inputRefs} />
                </div>
                <div style={{ display: selectedTab === 3 ? 'block' : 'none' }}>
                    <FormSection4 inputRefs={inputRefs} />
                </div>
                <div style={{ display: selectedTab === 4 ? 'block' : 'none' }}>
                    <FormSection5 inputRefs={inputRefs} />
                </div>
                <div style={{ display: selectedTab === 5 ? 'block' : 'none' }}>
                    <FormSection6 inputRefs={inputRefs} />
                </div>
                <div style={{ display: selectedTab === 6 ? 'block' : 'none' }}>
                    <FormSection7 inputRefs={allInputRefs} />
                </div>
            </div>

            <button onClick={handleGeneratePDF} className="bg-green-500 text-white px-5 py-2 rounded-lg">
                Gerar PDF
            </button>
        </div>
    );
};

export default FormIndex;