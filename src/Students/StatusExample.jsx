import React from 'react';
const isLoggedIn = false;
const hasError = false;
const errorMessage = "Network error";
import StudentInfo from './StudentInfo'

function StatusExample() {
  return (
    <div className="sma-status-box">

      {hasError && (
        <p className="sma-error">{errorMessage}</p>
      )}

      {isLoggedIn ? (
        <p className="sma-welcome">Welcome back!</p>
      ) : (
        <p className="sma-login-prompt">Please log in</p>
      )}

      {hasError ? <p className="sma-error">{errorMessage}</p> : null}
      <StudentInfo />
    </div>
  );
}
export default StatusExample;