import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Signup.css";


function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to create account');
        setLoading(false);
        return;
      }

      alert("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      setError('Failed to connect to server. Please make sure the backend is running.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body-wrapper">
      <div className="signup-container">
        <div className="header-design"></div>

        <h1 className="signup-title">Sign up</h1>

      <form onSubmit={handleSubmit} id="signup-form">
        <div className="input-group-row">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group stacked">
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
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group stacked">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirmation pass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <p className="resend-option">
          <a href="#">resend opt!</a>
        </p>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <button type="submit" className="btn-confirm" disabled={loading}>
          {loading ? 'Creating account...' : 'confirm'}
        </button>
      </form>

      <p className="login-prompt">
        do not you have account? <Link to="/login" className="login-link">login!</Link>
      </p>
    </div>
    </div>
  );
}

export default Signup;