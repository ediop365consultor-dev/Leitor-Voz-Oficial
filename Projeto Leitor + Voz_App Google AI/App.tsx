
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import AuthPage from './pages/AuthPage';
import LibraryPage from './pages/LibraryPage';
import ReaderPage from './pages/ReaderPage';
import WishlistPage from './pages/WishlistPage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import BottomNavigation from './components/feature/BottomNavigation';
import useLocalStorage from './hooks/useLocalStorage';
import StoresPage from './pages/StoresPage';

const PrivateRoute: React.FC<{ isAuthenticated: boolean; children: React.ReactElement }> = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const AppContent: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false);
    const [onboardingComplete] = useLocalStorage('onboardingComplete', false);
    const location = useLocation();
    
    const showBottomNav = ['/library', '/wishlist', '/settings', '/stores'].includes(location.pathname);

    // If onboarding is not complete, force the user to the onboarding page.
    // OnboardingPage handles setting the completion flag and navigating away.
    if (!onboardingComplete) {
        return (
            <Routes>
                <Route path="*" element={<OnboardingPage />} />
            </Routes>
        );
    }
    
    return (
        <div className="font-sans text-text-primary">
            <Routes>
                {/* 
                  The root path now always shows the HomePage. 
                  The previous logic redirected authenticated users to '/library',
                  which prevented the "Back" button from working correctly.
                */}
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={isAuthenticated ? <Navigate to="/library" /> : <AuthPage setAuth={setIsAuthenticated} />} />
                
                <Route path="/library" element={<PrivateRoute isAuthenticated={isAuthenticated}><LibraryPage /></PrivateRoute>} />
                <Route path="/reader/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}><ReaderPage /></PrivateRoute>} />
                <Route path="/wishlist" element={<PrivateRoute isAuthenticated={isAuthenticated}><WishlistPage /></PrivateRoute>} />
                <Route path="/stores" element={<PrivateRoute isAuthenticated={isAuthenticated}><StoresPage /></PrivateRoute>} />
                <Route path="/settings" element={<PrivateRoute isAuthenticated={isAuthenticated}><SettingsPage setAuth={setIsAuthenticated} /></PrivateRoute>} />
                
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {isAuthenticated && showBottomNav && <BottomNavigation />}
        </div>
    );
}

const App: React.FC = () => {
  return (
    <HashRouter>
        <AppContent />
    </HashRouter>
  );
};

export default App;
