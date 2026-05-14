import { Routes, Route, Navigate } from 'react-router-dom'
import './Page.css'
import LandingPage from './LandingPage'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import StudentList from './StudentList1'
import Header from './Header1'
import ProtectedRoute from './ProtectedRoute'

export default function App1() {
  return (
    <div className="sma-app">
      <Routes>

       
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={
          <div className="sma-auth-layout"><LoginForm /></div>
        } />

        <Route path="/register" element={
          <div className="sma-auth-layout"><RegisterForm /></div>
        } />

  
        <Route path="/students" element={
          <ProtectedRoute>
            <>
              <Header />
              <main className="sma-main">
                <StudentList />
              </main>
            </>
          </ProtectedRoute>
        } />

      
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </div>
  );
}
