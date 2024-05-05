import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        birthDate
      });
      navigate('/main'); // Redirect to main page after successful signup
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="center">
      <div className="blue-box">
        <h1>Sign Up</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
