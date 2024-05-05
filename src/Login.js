import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main'); // Navigate to Main page after successful login
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleGoToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="center">
      <div className="blue-box">
        <h1>Login</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleGoToSignup} style={{ marginTop: '10px' }}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
