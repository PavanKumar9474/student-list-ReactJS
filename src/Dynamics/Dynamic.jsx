import {Link, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import StudentList from './StudentLists'
import Header from '../pages/Header1'
import ProtectedRoute from '../pages/ProtectedRoute'
import CreateStudentPage from './CreateStudentPage'
import EditStudentPage from './EditStudentPage'
import MyBot from './MyBot'
export default function App() {
  return (
    <div className="sma-app">
      <Routes>
        <Route path="/MyBot1" element={<MyBot />} />
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
              <Link to='/MyBot1'>BoT</Link>
              {/* <Route path="/add" element={<CreateStudentPage />} />
              <Route path="/edit" element={<EditStudentPage />} /> */}
              <main className="sma-main">
                <StudentList />
              </main>
            </>
          </ProtectedRoute>
        } />
        <Route path="/students/new" element={
          <ProtectedRoute><CreateStudentPage /></ProtectedRoute>
        } />

        <Route path="/students/:id/edit" element={
          <ProtectedRoute><EditStudentPage /></ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
