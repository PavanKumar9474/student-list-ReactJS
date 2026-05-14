import { useState } from 'react'
import Loginform from './LoginForm'
import Registerform from './RegisterForm'
import Header from './Header'
import StudentList from './StudentList'
import './LoginRegmain.css'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('token')
  );
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => setIsLoggedIn(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="sma-app">
        <Header onLogout={handleLogout} />
        <main className="sma-main">
          <StudentList />
        </main>
      </div>
    );
  }

  return (
    <div className="sma-app sma-auth-layout">
      {showRegister ? (
        <Registerform onSwitchToLogin={() => setShowRegister(false)} />
      ) : (
        <Loginform
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={() => setShowRegister(true)}
        />
      )}
    </div>
  );
}