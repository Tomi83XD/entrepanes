import { useState } from 'react';
import logo from '../assets/logo1.png';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleHomeClick = () => {
        // Redirige a la landing page
        window.location.href = '/';
    };

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Evitar que el click en el modal cierre el modal
    const modalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full p-4 bg-gradient-to-l from-yellow-800 to-yellow-600 shadow-lg">
            <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-24 md:h-24 rounded-lg border-4 border-orange-950 shadow-lg transition-transform transform hover:scale-105" 
                />
            </div>
            <nav>
                <ul className="flex flex-col md:flex-row mx-0 md:mx-2 font-medium items-center">
                    <li className="p-2">
                        <button 
                            onClick={handleHomeClick} 
                            className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        >
                            Home
                        </button>
                    </li>
                    <li className="p-2">
                        <button 
                            onClick={handleContactClick} 
                            className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        >
                            Contacto
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="w-full md:w-24 h-9 text-center text-black mt-4 md:mt-0">
                <button className="px-4 py-2 rounded-lg text-white bg-orange-950 hover:bg-orange-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                    Login
                </button>
            </div>

            {/* Modal para Contacto */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-modal-title"
                >
                    <div 
                        className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative"
                        onClick={modalContentClick}
                    >
                        <button 
                            onClick={closeModal} 
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                            aria-label="Cerrar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 id="contact-modal-title" className="text-xl font-semibold mb-4 text-yellow-900">Contacto:</h2>
                        <p className="mb-2 text-gray-700"><strong>✉️E-mail:</strong> entrepanesvcp@Gmail.com</p>
                        <p className="text-gray-700"><strong>📸Instagram:</strong> @Entrepanes_VCP</p>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

