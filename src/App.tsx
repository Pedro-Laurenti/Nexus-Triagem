import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import profissionaisData from './assets/dados.json';
import SelectPage from './pages/SelectPage';
import FormPage from './pages/FormPage';

interface Profissional {
    id: number;
    nome: string;
    senha: string;
    especialidade: string;
    formação: string;
    NdoConselho: string;
}

const App: React.FC = () => {
    const [profissionais, setProfissionais] = useState<Profissional[]>([]);
    const [profissionalSelecionado, setProfissionalSelecionado] = useState<Profissional | null>(null);

    useEffect(() => {
        setProfissionais(profissionaisData);
    }, []);

    const handleProfissionalChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const profissionalId = parseInt(event.target.value, 10);
        const profissionalSelecionado = profissionais.find(
            (profissional) => profissional.id === profissionalId
        ) || null;

        setProfissionalSelecionado(profissionalSelecionado);
    };

    return (
        <div className='App'>
            <div className='APPCONTEUDO h-screen'>
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
                            path="/form"
                            element={<FormPage profissionalSelecionado={profissionalSelecionado} />}
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;