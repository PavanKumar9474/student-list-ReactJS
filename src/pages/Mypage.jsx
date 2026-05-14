import React from "react";
import { Routes, Route, Navigate,Link } from 'react-router-dom'
import Mymain from '../MyInterface/Mainmy'
import StudentList1 from "../components/StudentList1";
import LoginForm from "../RegisterLogin/LoginForm";
function Routerss() {
  return (
    <div className="sma-app">
      <div style={{ marginTop: "10px", display: "flex", gap: "1em",textAlign:"center",background:"black",position:"",marginLeft:"40rem" }}>
		<Link to="/" style={{position:"relative"}}>Hlo</Link>
		<Link to="/login" style={{position:"relative"}}>please login</Link>
		<Link to="/register" style={{position:"relative"}}>register Now</Link>
		<Link to="/students" style={{position:"relative"}}>Students List</Link>
	  </div>
      <Routes>
        <Route path="/" element={<h1>WELCOME !................</h1>} />
        <Route path="/login" element={<LoginForm />} style={{position:"absolute",marginLeft:"200px"}} />
        <Route path="/register" element={ <Mymain /> } />
        <Route path="/students" element={<StudentList1 />} />
    	<Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
export default Routerss;