
import React from 'react';
import { motion } from 'framer-motion';

// --- Custom SVG Icons for Stores ---

const AmazonIcon: React.FC = () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
        <path d="M12.562 20.95c.21 0 .42-.01.63-.04a3.98 3.98 0 002.56-1.28c.5-.5.75-1.12.75-1.87 0-.82-.28-1.47-.84-1.95s-1.34-.72-2.34-.72h-1.8v5.86h.21c.2-.28.48-.52.84-.71.35-.2.75-.3 1.19-.3zM11.512 16.51h1.19c.56 0 .99.1 1.28.3s.44.5.44.9-.13.69-.4.86c-.27.18-.7.29-1.28.34-.41.04-1.01.06-1.23.06v-2.76z" fill="currentColor"></path>
        <path d="M19.042 21.6a4.8 4.8 0 01-2.9 1.03c-.94 0-1.7-.26-2.28-.78s-.87-1.26-1.1-2.22l1.19-.44c.18.56.5 1.01 1.01 1.31.5.3 1.01.45 1.55.45.68 0 1.2-.18 1.55-.55s.52- uncommon.88.52-1.55v-4.1h1.3v4.1c0 .9-.33 1.6-1.01 2.1z" fill="currentColor"></path>
        <path d="M25.042 22.6c-1.2 0-2.14-.38-2.82-1.15s-1.02-1.78-1.02-2.83c0-1.06.34-1.9 1.02-2.67s1.62-1.15 2.82-1.15c1.2 0 2.14.38 2.82 1.15s1.02 1.78 1.02 2.84c0 1.05-.34 1.89-1.02 2.66s-1.62 1.15-2.82 1.15zm0-6.8c-.64 0-1.14.3-1.48.9s-.51 1.34-.51 2.22c0 .88.17 1.62.51 2.22s.84.9 1.48.9c.64 0 1.14-.3 1.48-.9s.51-1.34.51-2.22c0-.88-.17-1.62-.51-2.22s-.84-.9-1.48-.9z" fill="currentColor"></path>
        <path d="M16.92 19.38c-1.33-2.05-1.99-4.13-1.99-6.22 0-.36.03-.72.08-1.08H5.92v1.54h7.45c-.22.63-.53 1.23-.92 1.8-1.14 1.7-2.6 2.54-4.38 2.54-1.5 0-2.8-.45-3.89-1.34-1.09-.9-1.64-2.14-1.64-3.73s.55-2.84 1.64-3.73c1.09-.9 2.39-1.34 3.89-1.34 1.25 0 2.37.33 3.36.98l1.1-1.23c-1.3-.98-2.84-1.47-4.46-1.47-2.13 0-3.95.7-5.46 2.1-1.5 1.4-2.26 3.18-2.26 5.34s.75 3.94 2.26 5.34c1.5 1.4 3.33 2.1 5.46 2.1 1.7 0 3.2-.42 4.5-1.25 1.2-.75 2.1-1.8 2.66-3.13l-1.3-.44z" fill="currentColor"></path>
        <path d="M21.922 24.32a8.5 8.5 0 004.28-1.25 1 1 0 00.4-1.36 8.5 8.5 0 01-5.94-2.81 1 1 0 00-1.3-.2 10.5 10.5 0 00-6.3 1.23 1 1 0 00-.54 1.08c.1 1.1.7 2.1 1.78 2.92a1 1 0 001.32-.1c.7-.8 1.13-1.5 1.4-2.15a1 1 0 011.88.74c-.26.85-.86 1.8-1.8 2.85a1 1 0 00.6 1.6c1.03-.4 2.1-.86 3.2-1.35z" fill="#FF9900"></path>
    </svg>
);

const KoboIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#009DDF]">
      <circle cx="12" cy="12" r="12" fill="currentColor"/>
      <path d="M6 6.5H7.75V17.5H6V6.5ZM10.5 6.5C12.83 6.5 14.5 7.5 14.5 10V6.5H16.25V17.5H14.5V11.5C14.5 9 13 8.25 11.25 8.25H10.5V17.5H8.75V6.5H10.5ZM17 12.5C18 12.5 18.5 12 18.5 11C18.5 10 18 9.5 17 9.5C16 9.5 15.5 10 15.5 11C15.5 12 16 12.5 17 12.5Z" fill="white"/>
    </svg>
);

const GooglePlayIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M3.264 2.034C3.013 2.193 2.5 2.55 2.5 3.39V20.61C2.5 21.45 3.013 21.807 3.264 21.966L14.072 12L3.264 2.034Z" fill="#00A0DD"/>
        <path d="M16.14 10.13L13.84 12L16.14 13.87L21 16.5V7.5L16.14 10.13Z" fill="#FFC800"/>
        <path d="M14.072 12L3.264 21.966C3.69 22.25 4.381 21.983 4.908 21.67L16.14 13.87L14.072 12Z" fill="#00CC66"/>
        <path d="M16.14 10.13L4.908 2.33C4.381 2.017 3.69 1.75 3.264 2.034L14.072 12L16.14 10.13Z" fill="#FF3149"/>
    </svg>
);

const SaraivaIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-highlight">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5zM20 5H6.5A2.5 2.5 0 0 0 4 7.5 2.5 2.5 0 0 0 6.5 10H20V5z" fill="currentColor"/>
        <path d="M2 7.5C2 5.01 4.01 3 6.5 3H22v16H6.5C4.01 19 2 16.99 2 14.5V7.5zm2 0a2.5 2.5 0 0 1 2.5-2.5V17A2.5 2.5 0 0 1 4 14.5V7.5z" fill="currentColor"/>
    </svg>
);


const stores = [
    {
        name: 'Amazon Kindle',
        description: 'Livros em PDF e EPUB • compre e leia no Leitor + Voz',
        icon: <AmazonIcon />,
        url: 'https://www.amazon.com.br/kindle-ebooks',
    },
    {
        name: 'Kobo Rakuten',
        description: 'Livros em PDF e EPUB • compre e leia no Leitor + Voz',
        icon: <KoboIcon />,
        url: 'https://www.kobo.com/br/pt',
    },
    {
        name: 'Google Play Livros',
        description: 'Livros em PDF e EPUB • compre e leia no Leitor + Voz',
        icon: <GooglePlayIcon />,
        url: 'https://play.google.com/store/books',
    },
    {
        name: 'Saraiva Digital',
        description: 'Livros em PDF e EPUB • compre e leia no Leitor + Voz',
        icon: <SaraivaIcon />,
        url: 'https://www.saraiva.com.br/livros-digitais',
    },
];

const StoreCard: React.FC<{ store: (typeof stores)[0]; delay: number }> = ({ store, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="bg-card rounded-2xl p-6 flex items-center gap-6"
    >
        <div className="bg-card-light w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center">
            {store.icon}
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold font-display text-text-primary">{store.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{store.description}</p>
        </div>
        <a href={store.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <button className="bg-highlight text-background font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:bg-yellow-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-highlight">
                Visitar Loja
            </button>
        </a>
    </motion.div>
);


const StoresPage: React.FC = () => {
    return (
        <div className="p-4 md:p-6 pb-24 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl text-text-primary text-center mb-10"
                >
                    Compre seus livros favoritos em formato PDF e EPUB nas principais plataformas.
                </motion.h1>
                <div className="space-y-4">
                    {stores.map((store, index) => (
                        <StoreCard key={store.name} store={store} delay={index * 0.1 + 0.2} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoresPage;
