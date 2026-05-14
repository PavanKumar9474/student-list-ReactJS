import React from 'react';

const studentName = "Ravi";
const age = 20;
const city = "Kuppam";
const isAdult = age >= 18;

function StudentInfo() {
  return (
    <div className="sma-student-card">
      <h3>{studentName}</h3>

      <p>Born in: {2026 - age}</p>
      <span className={isAdult ? "sma-tag-adult" : "sma-tag-minor"}>
        {isAdult ? "Adult" : "Minor"}
      </span>
      <p>Location: {city + ", Andhra Pradesh"}</p>

      <p>Profile: {`${studentName}, ${age} years, ${city}`}</p>

      <p>Name length: {studentName.toUpperCase()}</p>
    </div>
  );
}
export default StudentInfo;