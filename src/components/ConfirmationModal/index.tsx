interface ConfirmationModalProps {
    isVisible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isVisible, onConfirm, onCancel }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Tem certeza?</h2>
                <p className="mb-4">Todos os dados não salvos serão perdidos.</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                        Confirmar
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;