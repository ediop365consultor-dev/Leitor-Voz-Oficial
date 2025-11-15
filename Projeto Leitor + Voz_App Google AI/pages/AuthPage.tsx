import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/base/Button';
import { AuthMode } from '../types';

const AuthPage: React.FC<{ setAuth: (auth: boolean) => void }> = ({ setAuth }) => {
  const [mode, setMode] = useState<AuthMode>(AuthMode.Login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuth(true);
    navigate('/library');
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {mode === AuthMode.Signup && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <label className="block text-sm font-medium text-gray-400">Nome</label>
          <input
            type="text"
            required
            className="mt-1 block w-full bg-card border border-card-light rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </motion.div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-400">Email</label>
        <input
          type="email"
          required
          className="mt-1 block w-full bg-card border border-card-light rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-highlight"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400">Senha</label>
        <input
          type="password"
          required
          className="mt-1 block w-full bg-card border border-card-light rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-highlight"
        />
      </div>
      <Button type="submit" className="w-full">
        {mode === AuthMode.Login ? 'Entrar' : 'Criar conta'}
      </Button>
    </form>
  );

  return (
    <div className="relative min-h-screen bg-background text-text-primary flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1920)" }}
      ></div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-card-light/80 p-8 rounded-xl shadow-2xl border border-white/10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display text-highlight">Leitor + Voz</h1>
        </div>
        <div className="flex border-b border-card mb-6">
          <button 
            onClick={() => setMode(AuthMode.Login)}
            className={`flex-1 py-3 text-lg font-bold transition-colors relative ${mode === AuthMode.Login ? 'text-highlight' : 'text-gray-400 hover:text-white'}`}
          >
            Entrar
            {mode === AuthMode.Login && <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-highlight" layoutId="underline" />}
          </button>
          <button 
            onClick={() => setMode(AuthMode.Signup)}
            className={`flex-1 py-3 text-lg font-bold transition-colors relative ${mode === AuthMode.Signup ? 'text-highlight' : 'text-gray-400 hover:text-white'}`}
          >
            Criar conta
            {mode === AuthMode.Signup && <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-highlight" layoutId="underline" />}
          </button>
        </div>
        {renderForm()}
      </motion.div>
    </div>
  );
};

export default AuthPage;