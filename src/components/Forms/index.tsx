import React, { useRef, useState, useEffect } from 'react';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';
import FormSection4 from './FormSection4';
import FormSection5 from './FormSection5';
import FormSection6 from './FormSection6';
import FormSection7 from './FormSection7';
import Tabs from '../Tabs';
import DropdownMenu from '@/components/DropdownMenu';

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

    // Refs para as seções
    const section1Refs = {
        profissionalNome: useRef<HTMLInputElement>(null),
        profissionalEspecialidade: useRef<HTMLInputElement>(null),
        profissionalNdoConselho: useRef<HTMLInputElement>(null),
        profissionalFormacao: useRef<HTMLInputElement>(null),
        identificaçãoNomePaciente: useRef<HTMLInputElement>(null),
        identificaçãoDataNascimentoPaciente: useRef<HTMLInputElement>(null),
        identificaçãoIdadePaciente: useRef<HTMLInputElement>(null),
        identificaçãoPesoPaciente: useRef<HTMLInputElement>(null),
        identificaçãoAlturaPaciente: useRef<HTMLInputElement>(null),
        identificaçãoNomePaiPaciente: useRef<HTMLInputElement>(null),
        identificaçãoNomeMãePaciente: useRef<HTMLInputElement>(null),
        identificaçãoContatoPaciente: useRef<HTMLInputElement>(null),
        identificaçãoIrmaosPaciente: useRef<HTMLInputElement>(null),
    };

    const section2Refs = {
        diagnosticoIndicaçãoDiagnóstica: useRef<HTMLInputElement>(null), //radio select aqui
        diagnosticoHipoteseDiagnostica: useRef<HTMLInputElement>(null), //radio select aqui
        diagnosticoDiagnosticoConcluido: useRef<HTMLInputElement>(null), //radio select aqui
        diagnosticoObservacoesDiagnosticos: useRef<HTMLInputElement>(null),
    };

    const section3Refs = {
        disciplinasReqPsicologia: useRef<HTMLSelectElement>(null),
        disciplinasReqTerapiaOcupacional: useRef<HTMLSelectElement>(null),
        disciplinasReqFisioterapia: useRef<HTMLSelectElement>(null),
        disciplinasReqMusicoterapia: useRef<HTMLSelectElement>(null),
        disciplinasReqFonoaudiologia: useRef<HTMLSelectElement>(null),
        disciplinasReqNeuropsicologia: useRef<HTMLSelectElement>(null),
        disciplinasReqPsicomotricidade: useRef<HTMLSelectElement>(null),
    };

    const section4Refs = {
        historicoAcompanhamentosNomeEncaminhadoPor: useRef<HTMLInputElement>(null),
        historicoAcompanhamentosDataUltimaConsulta: useRef<HTMLInputElement>(null),
        historicoAcompanhamentosProPsicologia: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProFonoaudiologia: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProTerapiaOcupacional: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProFisioterapia: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProNeuropsicologia: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProPsicomotricidade: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProMusicoterapia: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProNutricionista: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProAvaliaçãoNeuropsicológica: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProGeneticista: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProPsiquiatra: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosProDentista: useRef<HTMLSelectElement>(null),
        historicoAcompanhamentosObservacoes: useRef<HTMLInputElement>(null),
    };

    const section5Refs = {
        demandasPrincipais: useRef(null),
    };

    const section6Refs = {
        historicoGestacionalIdadeParto: useRef<HTMLSelectElement>(null),
        historicoGestacionalTipoParto: useRef<HTMLSelectElement>(null),
        historicoGestacionalApgar1: useRef<HTMLInputElement>(null),
        historicoGestacionalApgar2: useRef<HTMLInputElement>(null),
        historicoGestacionalPesoAoNascer: useRef<HTMLInputElement>(null),
        historicoGestacionalAlturaAoNascer: useRef<HTMLInputElement>(null),

        
        // NOVOS CAMPOS AQUI
        historicoGestacionalInfosPlanejada: useRef<HTMLSelectElement>(null),
        historicoGestacionalInfosDesejada: useRef<HTMLSelectElement>(null),
        historicoGestacionalInfosUsodeSubstancia: useRef<HTMLSelectElement>(null),
        historicoGestacionalInfosQuaisSubstacias: useRef<HTMLInputElement>(null),
        //
        historicoGestacionalComplicDurantePeriodo: useRef<HTMLSelectElement>(null),
        historicoGestacionalComplicQuaisDurantePeriodo: useRef<HTMLInputElement>(null),
        historicoGestacionalComplicDuranteParto: useRef<HTMLSelectElement>(null),
        historicoGestacionalComplicQuaisDuranteParto: useRef<HTMLInputElement>(null),
        historicoGestacionalComplicAposNascimento: useRef<HTMLSelectElement>(null),
        historicoGestacionalComplicQuaisAposNascimento: useRef<HTMLInputElement>(null),
        //
        historicoGestacionalTriagemNeonatalPezinho: useRef<HTMLInputElement>(null),
        historicoGestacionalTriagemNeonatalPezinhoNormal: useRef<HTMLInputElement>(null),
        historicoGestacionalTriagemNeonatalPezinhoAlterado: useRef<HTMLInputElement>(null),
        historicoGestacionalTriagemNeonatalOlhinho: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalOlhinhoNormal: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalOlhinhoAlterado: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalOrelhinha: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalOrelhinhaNormal: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalOrelhinhaAlterado: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalLinguinha: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalLinguinhaNormal: useRef<HTMLSelectElement>(null),
        historicoGestacionalTriagemNeonatalLinguinhaAlterado: useRef<HTMLSelectElement>(null),

        // OBSERVAÇÕES

        historicoGestacionalObservacoesAcompanhamentos: useRef<HTMLInputElement>(null),
        historicoGestacionalObservacoesPertinentes: useRef<HTMLInputElement>(null),
    };

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

    const allInputRefs: InputRefs = {
        ...section1Refs,
        ...section2Refs,
        ...section3Refs,
        ...section4Refs,
        ...section5Refs,
        ...section6Refs,
        ...section7Refs,
    };

    // Load form data from localStorage when component mounts
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData) as Record<string, string>;
            console.log('Dados carregados do localStorage:', parsedData);
            Object.keys(parsedData).forEach((key) => {
                const ref = allInputRefs[key];
                if (ref?.current) {
                    if (key === 'demandasPrincipais') {
                        const ckEditorInstance = ref.current;
                        ckEditorInstance.setData(parsedData[key]);
                    } else if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                        ref.current.checked = parsedData[key] === "true";
                    } else {
                        ref.current.value = parsedData[key];
                    }
                }
            });
        }
    }, [allInputRefs]);

    // Save form data to localStorage whenever inputs change
    useEffect(() => {
        const handleBeforeUnload = () => {
            const formData = Object.keys(allInputRefs).reduce((acc, key) => {
                const ref = allInputRefs[key];
                if (ref?.current) {
                    if (key === 'demandasPrincipais') {
                        const ckEditorInstance = ref.current;
                        const ckContent = ckEditorInstance.getData();
                        acc[key] = ckContent;
                    } else if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                        acc[key] = ref.current.checked.toString();
                    } else {
                        acc[key] = ref.current.value;
                    }
                }
                return acc;
            }, {} as Record<string, string>);
        
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Dados salvos no localStorage:', formData);
        };
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [allInputRefs]);

    const handleLogout = () => {
        // Limpa o localStorage
        localStorage.removeItem('formData');
        console.log('Dados do formulário limpos do localStorage');

        // Limpa os valores dos campos do formulário
        Object.keys(allInputRefs).forEach((key) => {
            const ref = allInputRefs[key];
            if (ref?.current) {
                if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                    ref.current.checked = false;
                } else if (key === 'demandasPrincipais') {
                    const ckEditorInstance = ref.current;
                    ckEditorInstance.setData('');
                } else {
                    ref.current.value = '';
                }
            }
        });
        console.log('Campos do formulário limpos');
    };

    const handleSaveAs = () => {
        const formData = Object.keys(allInputRefs).reduce((values, key) => {
            const ref = allInputRefs[key];
            if (ref?.current) {
                if (key === 'demandasPrincipais') {
                    const ckEditorInstance = ref.current;
                    const ckContent = ckEditorInstance.getData();
                    values[key] = ckContent;
                } else if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                    values[key] = ref.current.checked.toString();
                } else {
                    values[key] = ref.current.value;
                }
            }
            return values;
        }, {} as Record<string, string>);
        console.log('Dados do formulário:', formData);

        const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formData.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result as string;
                try {
                    const parsedData = JSON.parse(text) as Record<string, string>;
                    console.log('Dados carregados do arquivo:', parsedData);
                    Object.keys(parsedData).forEach((key) => {
                        const ref = allInputRefs[key];
                        if (ref?.current) {
                            if (key === 'demandasPrincipais') {
                                const ckEditorInstance = ref.current;
                                ckEditorInstance.setData(parsedData[key]);
                            } else if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                                ref.current.checked = parsedData[key] === 'true';
                            } else {
                                ref.current.value = parsedData[key];
                            }
                        }
                    });
                } catch (error) {
                    console.error('Erro ao carregar o arquivo JSON:', error);
                }
            };
            reader.readAsText(file);
        }
    };

    const handleGeneratePDF = () => {
        const formData = Object.keys(allInputRefs).reduce((values, key) => {
            const ref = allInputRefs[key];
            if (ref?.current) {
                if (key === 'demandasPrincipais') {
                    const ckEditorInstance = ref.current;
                    const ckContent = ckEditorInstance.getData();
                    values[key] = ckContent;
                } else if (ref.current.type === 'checkbox' || ref.current.type === 'radio') {
                    values[key] = ref.current.checked.toString();
                } else {
                    values[key] = ref.current.value;
                }
            }
            return values;
        }, {} as Record<string, string>);
        console.log('Dados do formulário:', formData);
    
        // Adicione a lógica para geração do PDF aqui
        // Por exemplo: 
        // generatePDF(formData);
    };

    return (
        <div className="bg-white p-5 flex flex-col items-center" id={idForm}>
            <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className="tab-content w-full">
                <div style={{ display: selectedTab === 0 ? 'block' : 'none' }} className='w-full'>
                    <FormSection1 inputRefs={section1Refs} profissional={profissional} />
                </div>
                <div style={{ display: selectedTab === 1 ? 'block' : 'none' }}>
                    <FormSection2 inputRefs={section2Refs} />
                </div>
                <div style={{ display: selectedTab === 2 ? 'block' : 'none' }}>
                    <FormSection3 inputRefs={section3Refs} />
                </div>
                <div style={{ display: selectedTab === 3 ? 'block' : 'none' }}>
                    <FormSection4 inputRefs={section4Refs} />
                </div>
                <div style={{ display: selectedTab === 4 ? 'block' : 'none' }}>
                    <FormSection5 inputRefs={section5Refs} />
                </div>
                <div style={{ display: selectedTab === 5 ? 'block' : 'none' }}>
                    <FormSection6 inputRefs={section6Refs} />
                </div>
                <div style={{ display: selectedTab === 6 ? 'block' : 'none' }}>
                    <FormSection7 inputRefs={section7Refs} />
                </div>
            </div>

            <DropdownMenu
                handleGeneratePDF={handleGeneratePDF}
                handleLogout={handleLogout}
                handleSaveAs={handleSaveAs}
                handleLoad={handleLoad}
            />
        </div>
    );
};

export default FormIndex;
