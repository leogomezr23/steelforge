
import type { FC, ReactNode } from 'react'; 


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    
    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl p-6 m-4 max-w-lg w-full transform transition-all duration-300 scale-100 relative"
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>
                
                {children}
                
                <button 
                    onClick={onClose}
                    className="w-full mt-6 bg-[#FF7D00] text-white py-3 rounded-full font-semibold hover:bg-[#FFB166] transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};