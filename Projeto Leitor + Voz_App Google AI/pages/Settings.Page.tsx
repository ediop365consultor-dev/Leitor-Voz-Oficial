
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const SettingsPage: React.FC<{setAuth: (auth: boolean) => void}> = ({ setAuth }) => {
  const [language, setLanguage] = useLocalStorage('language', 'pt');
  const [notifications, setNotifications] = useLocalStorage('notifications', true);

  const handleLogout = () => {
      setAuth(false);
      // In a real app, you'd also clear tokens, etc.
  };

  return (
    <div className="p-4 md:p-6 pb-24 text-text-primary">
      <h1 className="text-3xl md:text-4xl font-display text-highlight mb-8">Configurações</h1>

      <div className="mb-8 p-6 bg-card rounded-lg flex items-center gap-4">
        <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">Usuário Leitor</h2>
          <p className="text-gray-400">usuario.leitor@email.com</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-highlight">Preferências</h3>
          <div className="flex justify-between items-center">
            <label htmlFor="language" className="font-medium">Idioma</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-card-light border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-highlight"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-4">
            <label htmlFor="notifications" className="font-medium">Notificações</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications} 
                onChange={() => setNotifications(!notifications)} 
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-card-light peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-highlight rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>
        </div>
        <button 
            onClick={handleLogout}
            className="w-full text-center py-3 bg-red-800 hover:bg-red-700 rounded-lg font-bold transition-colors">
            Sair
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
