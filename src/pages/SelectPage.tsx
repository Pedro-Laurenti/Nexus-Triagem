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
    const [profissionalSenha, setSenha] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedProfissional(value);
        setError('');  // Clear the error when changing selection
        onProfissionalChange(event);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
        setError('');  // Clear the error when changing password
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (selectedProfissional && profissionalSenha) {
            const profissional = profissionais.find(p => p.profissionalId === parseInt(selectedProfissional, 10));
            if (profissional && profissionalSenha === profissional.profissionalSenha) {
                // Armazena o ID do profissional e a senha no localStorage
                localStorage.setItem('profissionalId', profissional.profissionalId.toString());
                localStorage.setItem('profissionalSenha', profissionalSenha);
                navigate('formulario');
            } else {
                setError('Senha incorreta. Por favor, tente novamente.');
                setSenha('');
            }
        } else {
            alert('Por favor, selecione um profissional e insira a senha.');
        }
    };
    

    return (
        <div className="flex justify-between items-end relative h-screen overflow-hidden">
            <div className="bg-gradient-to-br from-white to-blue-100 p-10 flex flex-col items-center relative h-full w-full">
                <img alt="logo" src={imgCapa} className="w-full absolute bottom-0 z-[2]" />
                <img alt="logo" src={gridCapa} className="w-full absolute bottom-0 p-10 opacity-10" />
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-sky-500 p-10 flex flex-col items-center gap-20 justify-center h-full w-full">
                <img alt="logo" className="logo h-28" src={LogoTLK} />

                <section className="text-center text-white">
                    <div className="text-4xl font-extrabold">TRIAGEM INICIAL INFANTIL</div>
                    <div className="text-2xl">Rede de Clínicas - Therapies Love Kids</div>
                </section>

                <form className="w-4/5">
                    <select className="bg-white text-gray-700 rounded-lg h-10 w-full px-5" onChange={handleSelectChange} value={selectedProfissional}>
                        <option value="">Selecione o Profissional</option>
                        {profissionais.map((profissional) => (
                            <option key={profissional.profissionalId} value={profissional.profissionalId.toString()}>
                                {profissional.profissionalNome}
                            </option>
                        ))}
                    </select>

                    <input
                        className="bg-white text-gray-700 rounded-lg h-10 w-full px-5 mt-2"
                        placeholder="Senha de acesso"
                        type="password"
                        value={profissionalSenha}
                        onChange={handlePasswordChange}
                    />

                    {error && <div className="text-red-500 mt-2">{error}</div>}

                    <button className="bg-green-300 hover:bg-green-400 text-slate-700 rounded-lg h-10 w-full px-5 mt-10" onClick={handleButtonClick} type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default SelectPage;