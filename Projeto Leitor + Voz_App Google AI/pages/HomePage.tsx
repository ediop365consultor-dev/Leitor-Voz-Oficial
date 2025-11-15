import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/base/Button';

// --- NEW REFINED ICONS FOR STATS ---
const StatBookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h.01" />
    </svg>
);
const StatClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const StatCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- FEATURE ICONS (UNCHANGED) ---
const FeatureVoiceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0" /></svg>
);
const FeatureDevicesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);
const FeatureSettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const HomePageHeader = () => (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-display text-white font-semibold">Leitor + Voz</h1>
             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#1c6f72] shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    {/* Book */}
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 10a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <line x1="3" y1="10" x2="3" y2="19" />
                    <line x1="12" y1="10" x2="12" y2="19" />
                    <line x1="21" y1="10" x2="21" y2="19" />
                    {/* Waves */}
                    <path d="M15 7a5 5 0 0 0 -6 0" />
                    <path d="M17 4.5a9 9 0 0 0 -10 0" />
                </svg>
            </div>
        </div>
    </header>
);

const HomePageFooter = () => (
    <footer className="bg-[#181b21] py-4">
        <div className="container mx-auto text-center text-gray-500 text-sm">
            <p>© 2024 Leitor + Voz. Todos os direitos reservados.</p>
        </div>
    </footer>
);

const NewStatItem: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="flex items-center gap-3">
        <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center border border-highlight rounded-md">
            {icon}
        </div>
        <div>
            <p className="font-semibold text-lg text-white whitespace-nowrap">{value}</p>
            <p className="text-sm text-gray-300 opacity-80 whitespace-nowrap">{label}</p>
        </div>
    </div>
);


const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string, delay: number }> = ({ icon, title, description, delay }) => (
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay }}
        className="bg-card p-6 rounded-lg text-center flex flex-col items-center"
     >
        {icon}
        <h3 className="text-xl font-display text-white mt-3 mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);


const HomePage: React.FC = () => {
    return (
        <div className="bg-background text-text-primary">
            <HomePageHeader />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1920)" }}></div>
                    <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-black/70 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-display text-white"
                        >
                            Sua Biblioteca Pessoal <span className="text-highlight">Digital</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-4 max-w-2xl text-base sm:text-lg text-gray-300"
                        >
                            Organize, leia e escute seus livros favoritos em um só lugar. Uma experiência moderna e elegante.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8 bg-highlight/10 backdrop-blur-sm rounded-lg p-3 w-full max-w-2xl"
                        >
                            <div className="flex justify-around items-center gap-4">
                                <NewStatItem icon={<StatBookIcon />} value="128" label="Livros" />
                                <NewStatItem icon={<StatClockIcon />} value="72h 15m" label="Leitura" />
                                <NewStatItem icon={<StatCheckIcon />} value="12" label="Concluídos" />
                            </div>
                        </motion.div>
                    </div>
                </section>
                
                {/* Auth Section */}
                <section className="relative z-10 -mt-24 px-4">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="container mx-auto max-w-2xl bg-card-light/20 p-6 sm:p-8 rounded-lg shadow-2xl text-center backdrop-blur-md border border-white/10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-display text-white mb-2">Comece sua jornada literária</h2>
                        <p className="text-gray-400 mb-6">Junte-se a nós para uma experiência de leitura inesquecível.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
                            <input type="email" placeholder="Seu melhor e-mail" className="w-full sm:w-auto flex-grow bg-card border border-card-light rounded-md py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-highlight"/>
                             <Link to="/auth">
                                <Button variant="primary" className="w-full sm:w-auto">Começar Agora</Button>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400">
                            Já tem conta? <Link to="/auth" className="font-bold text-highlight hover:underline">Entrar</Link>
                        </p>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="bg-background pt-8 pb-16 sm:pb-24 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-display text-center text-white mb-8">Recursos que você vai amar</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <FeatureCard 
                                icon={<FeatureVoiceIcon />} 
                                title="Leitura em Voz Alta"
                                description="Escute seus livros com IA de voz natural e controles de velocidade personalizáveis."
                                delay={0.2}
                            />
                            <FeatureCard 
                                icon={<FeatureDevicesIcon />} 
                                title="Multiplataforma"
                                description="Acesse sua biblioteca em qualquer dispositivo. Seu progresso é sincronizado na nuvem."
                                delay={0.4}
                            />
                            <FeatureCard 
                                icon={<FeatureSettingsIcon />} 
                                title="Personalização"
                                description="Ajuste fontes, temas e espaçamento para criar a experiência de leitura perfeita para você."
                                delay={0.6}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <HomePageFooter />
        </div>
    );
};

export default HomePage;