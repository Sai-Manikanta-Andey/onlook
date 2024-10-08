import { TooltipProvider } from '@/components/ui/tooltip';
import { createContext, useContext } from 'react';
import Announcement from './components/Announcement';
import AppBar from './components/AppBar';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
import { AuthManager } from './lib/auth';
import ProjectEditor from './routes/project';

const AuthContext = createContext(new AuthManager());
export const useAuthManager = () => useContext(AuthContext);

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <TooltipProvider>
                <AppBar />
                <ProjectEditor />
                <Announcement />
                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
    );
}

export default App;
