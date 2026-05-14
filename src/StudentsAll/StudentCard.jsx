import React from 'react';
import StudentList1 from '../components/StudentList1';
function StudentCard({ name, age }) {
  return (
    <div className="sma-student-card">
      <h3>{name}</h3>
      <p>{age} years old</p>
      <StudentList1 />
    </div>
  );
}
export default StudentCard;


