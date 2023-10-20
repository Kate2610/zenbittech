import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/authAction'; // Импортируйте экшен login из ваших действий
import './LoginForm.css';

function LogInForm({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
  
    login(email, password);
    navigate('/');
  };

  return (
    <div className="LoginFormContainer">
      <div className="ImageContainer"></div>
      <div className="FormContainer">
        <div className="ContentContainer">
          <h2 className="LoginText">Log In</h2>
          <form>
            <div className="FormField">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ width: '350px', height: '48px' }}
                placeholder="Email"
              />
            </div>
            <div className="FormField">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ width: '350px', height: '48px' }}
                placeholder="Password"
              />
            </div>
            <div className="FormField">
              <a href="#" className="ForgotPasswordLink">
                Forgot password?
              </a>
            </div>
            <button onClick={handleLogin} className="SignInButton">
              Sign in
            </button>
            <div className="FormField">
              <p className="SignUpText">
                Don't have an account? <a href="#" className="SignUpLink">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LogInForm);
