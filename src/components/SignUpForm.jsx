import React, { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Обработка регистрации пользователя, например, отправка данных на сервер
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label >Email:</label>
          <input
  type="email"
  value={email}
  style={{ width: '350px', height: '71px' }}
  onChange={handleEmailChange}
/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
