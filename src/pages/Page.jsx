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

        {/* Public routes — no auth needed */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={
          <div className="sma-auth-layout"><LoginForm /></div>
        } />

        <Route path="/register" element={
          <div className="sma-auth-layout"><RegisterForm /></div>
        } />

        {/* Protected route — ProtectedRoute checks for JWT token */}
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

        {/* Catch-all — any unknown URL goes to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </div>
  );
}

// Route order matters — Routes renders the FIRST match.
// path="*" must always be LAST or it matches everything.