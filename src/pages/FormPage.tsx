import React from 'react';
import Form from '../components/Forms';
import LogoTLK from '../assets/1-2-logo-white.svg';

interface Profissional {
    profissionalId: number;
    profissionalNome: string;
    profissionalSenha: string;
    profissionalEspecialidade: string;
    profissionalFormacao: string;
    profissionalNdoConselho: string;
}

interface FormPageProps {
    profissionalSelecionado: Profissional | null;
}

const FormPage: React.FC<FormPageProps> = ({ profissionalSelecionado }) => {

    return (
        <div className="bg-slate-200">
            <div className={`
                bg-sky-500 h-20 w-full py-5 px-40 text-white
                flex items-center justify-between`}>
                <img alt="logo" className="logo h-10" src={LogoTLK} />
                <h2 className="text-xl font-extrabold">TRIAGEM INICIAL</h2>
            </div>
            <div className="overflow-x-hidden">
                {profissionalSelecionado &&
                    <Form profissional={profissionalSelecionado} idForm={'form'} />
                }
            </div>
        </div>
    );
};

export default FormPage;