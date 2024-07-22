import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/FormPage';
import LogoTLK from '../assets/1-2-logo-white.svg';

interface Profissional {
    id: number;
    nome: string;
}

interface FormPageProps {
    profissionalSelecionado: Profissional | null;
}

const FormPage: React.FC<FormPageProps> = ({ profissionalSelecionado }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-200 h-screen">
      <div className="bg-sky-500 h-30 w-full py-5 px-20 text-white grid grid-cols-2 gap-4 place-items-center align-bottom">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">TRIAGEM INICIAL</h2>
          <h4 className="text-2xl">Rede de Clínicas - Therapies Love Kids</h4>
        </div>
        <img alt="logo" className="logo h-20" src={LogoTLK} />
      </div>
      <div className="overflow-x-hidden">
        {profissionalSelecionado && <Form profissional={profissionalSelecionado} idForm={'form'} />}
      </div>
      <div className="mt-5 flex justify-center space-x-4">
        <button
          className="border border-red-500 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-transparent hover:text-red-500"
          onClick={() => navigate('/')}
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default FormPage;