import React from 'react';
const students = [
  { id: 1, name: "Ravi", age: 20, email: "ravi@test.com", city: "Kuppam" },
  { id: 2, name: "Priya", age: 22, email: "priya@test.com", city: "Chennai" },
  { id: 3, name: "Arjun", age: 19, email: "arjun@test.com", city: "Bangalore" },
];

function StudentList1() {
  return (
    <div className="sma-student-list">
      {students.map((student) => (
        <div className="sma-student-card" key={student.id}>
          <h3 className="sma-student-card-name">NAME : {student.name}</h3>
          <p className="sma-student-card-detail">Age: {student.age}</p>
          <p className="sma-student-card-detail">EMAIL : {student.email}</p>
          <span className="sma-student-card-tag"> CITY : {student.city}</span>
        </div>
      ))}
    </div>
  );
}
students.map((student) => <div key={student.id}>...</div>)
export default StudentList1;