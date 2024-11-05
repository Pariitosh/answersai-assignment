import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import SignUp from '../pages/SignUp';
import HeroPage from '../pages/HeroPage';
import  { Courses, Home } from '../pages/MainDashboard';
import {Navbar} from '../components/Navbar';
export default function MainRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route 
          path="/signup" 
          element={<SignUp onAuthentication={handleAuthentication} />} 
        />
        <Route 
          path="/dashboard" 
          element={
            <MainLayout>
              {isAuthenticated ? (
                < Home/> // Render the Home component by default
              ) : (
                <Navigate to="/signup" replace />
              )}
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({  }) => {
  const [selectedComponent, setSelectedComponent] = useState<'home' | 'course'>('home');

  const handleNavItemClick = (component: 'home' | 'course') => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <Navbar onNavItemClick={handleNavItemClick} selectedComponent={selectedComponent} />      <div>
        {selectedComponent === 'home' ? <Home /> : <Courses />}
      </div>
    </div>
  );
};