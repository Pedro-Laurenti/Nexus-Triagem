import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import profissionaisData from './assets/dados.json';
import SelectPage from './pages/SelectPage';
import FormPage from './pages/FormPage';

interface Profissional {
    profissionalId: number;
    profissionalNome: string;
    profissionalSenha: string;
    profissionalEspecialidade: string;
    profissionalFormacao: string;
    profissionalNdoConselho: string;
}

const App: React.FC = () => {
    const [profissionais, setProfissionais] = useState<Profissional[]>([]);
    const [profissionalSelecionado, setProfissionalSelecionado] = useState<Profissional | null>(null);

    useEffect(() => {
        setProfissionais(profissionaisData);

        // Verifica se há dados armazenados e preenche o estado
        const storedProfissionalId = localStorage.getItem('profissionalId');
        if (storedProfissionalId) {
            const profissionalId = parseInt(storedProfissionalId, 10);
            const profissionalSelecionado = profissionaisData.find(p => p.profissionalId === profissionalId) || null;
            setProfissionalSelecionado(profissionalSelecionado);
        }
    }, []);

    const handleProfissionalChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const profissionalId = parseInt(event.target.value, 10);
        const profissionalSelecionado = profissionais.find(
            (profissional) => profissional.profissionalId === profissionalId
        ) || null;

        setProfissionalSelecionado(profissionalSelecionado);
    };

    return (
        <div className='App w-full'>
            <div className='APPCONTEUDO w-full '>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <SelectPage
                                    profissionais={profissionais}
                                    onProfissionalChange={handleProfissionalChange}
                                />
                            }
                        />
                        <Route
                            path="formulario"
                            element={<FormPage profissionalSelecionado={profissionalSelecionado} />}
                        />
                        <Route
                            path="/inicio"
                            element={<FormPage profissionalSelecionado={profissionalSelecionado} />}
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;