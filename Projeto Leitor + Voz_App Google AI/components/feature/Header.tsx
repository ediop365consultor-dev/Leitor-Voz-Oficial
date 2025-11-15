import React, { useState, useRef } from 'react';

const bannerThemes = [
  // Tema 1 — Biblioteca Clássica
  'https://images.unsplash.com/photo-1529142213193-es3028a41740?auto=format&fit=crop&q=80&w=1920',
  // Tema 2 — Leitura Digital Moderna
  'https://images.unsplash.com/photo-1585241936933-be721f92e3a1?auto=format&fit=crop&q=80&w=1920',
  // Tema 3 — Modo Noturno / Estudo Noturno
  'https://images.unsplash.com/photo-1447023197173-74ac0cf59735?auto=format&fit=crop&q=80&w=1920',
];

const getRandomBanner = () => bannerThemes[Math.floor(Math.random() * bannerThemes.length)];

interface HeaderProps {
    onFileUpload: (file: File) => void;
}

const AddIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ onFileUpload }) => {
    const [bannerImage] = useState(getRandomBanner());
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const allowedTypes = [
                "application/pdf",
                "application/epub+zip",
                "application/epub",
            ];
            if (allowedTypes.includes(file.type)) {
                onFileUpload(file);
            } else {
                alert("Formato inválido. Envie apenas arquivos PDF ou EPUB.");
            }
        }
        // Reset file input to allow uploading the same file again
        if(event.target) {
            event.target.value = '';
        }
    };

    return (
        <header>
            <div
              className="relative w-full h-[220px] rounded-xl overflow-hidden mb-4 group shadow-lg bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${bannerImage})` }}
              role="img"
              aria-label="Banner da Biblioteca com tema dinâmico"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex flex-col justify-end p-6">
                <h2 className="text-highlight text-2xl font-semibold font-display">Sua Biblioteca</h2>
                <p className="text-white text-sm opacity-90">Organize e descubra seus livros favoritos</p>
              </div>
            </div>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar em sua biblioteca..."
                    className="w-full bg-card border border-card-light rounded-full py-3 pl-12 pr-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-highlight"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
             <div className="flex justify-end items-center mt-4">
                <input
                    type="file"
                    accept=".pdf,.epub"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 bg-highlight text-background font-medium px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-200"
                >
                    <AddIcon />
                    <span>Adicionar Livro</span>
                </button>
            </div>
        </header>
    );
};

export default Header;