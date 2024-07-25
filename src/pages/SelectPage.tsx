import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoTLK from '../assets/1-2-logo-white.svg';
import imgCapa from '../assets/img capa.png';
import gridCapa from '../assets/gridicon.svg';

interface Profissional {
    [key: string]: any;
}

interface SelectPageProps {
    profissionais: Profissional[];
    onProfissionalChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectPage: React.FC<SelectPageProps> = ({ profissionais, onProfissionalChange }) => {
    const [selectedProfissional, setSelectedProfissional] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const navigate = useNavigate();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedProfissional(value);
        onProfissionalChange(event);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (selectedProfissional && senha) {
            navigate('/form');
        } else {
            alert('Por favor, selecione um profissional e insira a senha.');
        }
    };

    return (
        <div className="grid grid-cols-2 relative">
            <div className="bg-gradient-to-br from-white to-blue-100 p-10 flex flex-col items-center overflow-hidden relative h-full">
                <img alt="logo" src={imgCapa} className="w-full absolute bottom-0 filter" />
                <img alt="logo" src={gridCapa} className="w-full absolute bottom-0 p-10 opacity-10" />
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-sky-500 p-10 flex flex-col items-center gap-20 justify-center h-full">
                <img alt="logo" className="logo h-28" src={LogoTLK} />

                <div className="text-center text-white">
                    <h2 className="text-4xl font-extrabold">TRIAGEM INICIAL INFANTIL</h2>
                    <h4 className="text-2xl">Rede de Clínicas - Therapies Love Kids</h4>
                </div>

                <form className="w-4/5">
                    <select className="bg-white text-gray-700 rounded-lg h-10 w-full px-5" onChange={handleSelectChange}>
                        <option value="">Selecione o Profissional</option>
                        {profissionais.map((profissional) => (
                            <option key={profissional.id} value={profissional.id}>
                                {profissional.nome}
                            </option>
                        ))}
                    </select>

                    <input
                        className="bg-white text-gray-700 rounded-lg h-10 w-full px-5 mt-2"
                        placeholder="Senha de acesso"
                        type="password"
                        value={senha}
                        onChange={handlePasswordChange}
                    />

                    <button className="bg-green-300 hover:bg-green-400 text-slate-700 rounded-lg h-10 w-full px-5 mt-10" onClick={handleButtonClick} type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default SelectPage;