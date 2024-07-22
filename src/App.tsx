import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profissionaisData from './assets/dados.json';
import SelectPage from './pages/SelectPage';
import FormPage from './pages/FormPage';

interface Profissional {
  id: number;
  nome: string;
  // Adicione outros campos conforme necessário
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
    ) || null; // Adicione uma verificação de null caso não seja encontrado

    setProfissionalSelecionado(profissionalSelecionado);
  };

  return (
    <div className='App'>
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
  );
}

export default App;