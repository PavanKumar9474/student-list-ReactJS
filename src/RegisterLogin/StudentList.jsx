import React from 'react';
import Mymain from '../MyInterface/Mainmy'
const students = [
  { name: "Ravi", age: 20 },
  { name: "Priya", age: 22 },
];

function StudentList() {
  return (
    <div className="sma-student-list">
      {students.map(s => (
        <div className="sma-student-card" key={s.name}>
          <h3>{s.name}</h3>
          <p>{s.age}</p>
        </div>
      ))}
      <Mymain />
    </div>
  );
}
export default StudentList;