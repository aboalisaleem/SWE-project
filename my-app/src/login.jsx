import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(`❌ ${data.message || 'Login failed'}`);
        setLoading(false);
        return;
      }

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setMessage("✅ Login Successful! Welcome back.");
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      setMessage("❌ Failed to connect to server. Please make sure the backend is running.");
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body-wrapper">
      <div className="login-container">
        <div className="header-design"></div>
        <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} id="login-form">
        <div className="input-group stacked">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group stacked">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="helper-options-row">
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <Link to="/MissingPASS" className="forgot-password-link">Forgot Password?</Link>
        </div>
        <div className="button-group">
          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>
          <Link to="/signup" className="btn-signup-link">
            <button type="button" className="btn-signup">Sign up</button>
          </Link>
        </div>
      </form>
      {message && <h2 className="welcome-message">{message}</h2>}
      
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">only for test:</p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
           (Dashboard )
        </button>
      </div>
      
    </div>
    </div>
  );
}

export default Login;