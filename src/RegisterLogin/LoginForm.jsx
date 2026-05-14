import { useState } from 'react'
import axios from 'axios'

const API_BASE = 'http://localhost:8000'

export default function LoginForm({ onLoginSuccess, onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');           // clear previous error
    setLoading(true);       // disable button, show loading text

    try {
      const response = await axios.post(`${API_BASE}/auth/login`, {
        username,
        password,
      });

      // Store the JWT token in localStorage
      localStorage.setItem('token', response.data.access_token);
      onLoginSuccess();    // tell App.jsx login succeeded

    } catch (err) {
      if (err.response) {
        // Server responded with an error status (401, 400, etc.)
        setError(err.response.data.detail || 'Login failed');
      } else {
        // No response — network error, server not running
        setError('Cannot reach the server. Is FastAPI running on port 8000?');
      }
    } finally {
      setLoading(false);   // always re-enable button
    }
  };

  return (
    <div className="sma-auth-card">
      <h2 className="sma-auth-title">Welcome Back</h2>
      <p className="sma-auth-subtitle">Sign in to manage students</p>

      {error && (
        <div className="sma-alert sma-alert-error">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="sma-form">
        <div className="sma-form-group">
          <label className="sma-label">Username</label>
          <input
            type="text"
            className="sma-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="sma-form-group">
          <label className="sma-label">Password</label>
          <input
            type="password"
            className="sma-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="sma-btn sma-btn-primary sma-btn-full"
          disabled={loading || !username || !password}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="sma-auth-switch">
        No account?{' '}
        <button
          type="button"
          className="sma-auth-switch-btn"
          onClick={onSwitchToRegister}
        >
          Create one
        </button>
      </p>
    </div>
  );
}