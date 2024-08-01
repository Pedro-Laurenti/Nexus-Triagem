import { useState } from 'react';
import { MdOutlineExitToApp, MdPrint, MdSaveAs, MdFileUpload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import ConfirmationModal from '../ConfirmationModal'; // Importe o novo componente

interface DropdownMenuProps {
    handleGeneratePDF: () => void;
    handleLogout: () => void;
    handleSaveAs: () => void;
    handleLoad: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ handleGeneratePDF, handleLogout, handleSaveAs, handleLoad }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // Novo estado para controlar a visibilidade do modal

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const handleExit = () => {
        setIsModalVisible(true); // Mostra o modal
    };

    const handleConfirmExit = () => {
        handleLogout(); // Chama a função de logout
        setIsModalVisible(false); // Fecha o modal
        navigate('/'); // Navega para a rota de saída
    };

    const handleCancelExit = () => {
        setIsModalVisible(false); // Fecha o modal
    };

    return (
        <div className="fixed z-20 flex flex-row-reverse gap-2 bottom-2 right-2">
            <button
                onClick={toggleMenu}
                className={`aspect-square rounded-full transition-all font-bold
                    ${isOpen ? ' rotate-90 bg-slate-300 hover:text-slate-600' : 'text-white bg-slate-600 hover:text-slate-300'
                }`}>
                <CiMenuKebab className='w-full h-full' />
            </button>
            {isOpen && (
                <div className="flex gap-2 flex-row-reverse items-end ">

                    <button
                        className="aspect-square h-10 p-2 rounded-full bg-red-500 text-white hover:bg-transparent hover:text-red-500 transition-all transform hover:rotate-180"
                        onClick={handleExit} >
                        <MdOutlineExitToApp className='w-full h-full' />
                    </button>

                    <button
                        className="aspect-square h-10 p-2 rounded-full bg-green-600 text-white hover:bg-transparent hover:text-green-600 transition-all transform"
                        onClick={handleGeneratePDF} >
                        <MdPrint className='w-full h-full' />
                    </button>

                    <button
                        className="aspect-square h-10 p-2 rounded-full bg-sky-600 text-white hover:bg-transparent hover:text-sky-600 transition-all transform"
                        onClick={handleSaveAs} >
                        <MdSaveAs className='w-full h-full' />
                    </button>

                    <label className="aspect-square h-10 p-2 rounded-full bg-blue-600 text-white hover:bg-transparent hover:text-blue-600 transition-all transform cursor-pointer">
                        <MdFileUpload className='w-full h-full' />
                        <input
                            type="file"
                            accept=".json"
                            onChange={handleLoad}
                            className="hidden"
                        />
                    </label>
                </div>
            )}
            <ConfirmationModal
                isVisible={isModalVisible}
                onConfirm={handleConfirmExit}
                onCancel={handleCancelExit}
            />
        </div>
    );
};

export default DropdownMenu;