import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'pw':
        setPw(value);
        break;
      default:
        break;
    }
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === 'eduardo.lino@pucpr.br' && pw === '123456') {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="App">
      <div className="center">
        <div className="right-column">
          <div className="blue-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="emailInput">Email:</label>
                <input
                  id="emailInput"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                  className="white-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="passwordInput">Senha:</label>
                <input
                  id="passwordInput"
                  type="password"
                  name="pw"
                  value={pw}
                  onChange={handleInputChange}
                  required
                  className="white-input"
                />
              </div>

              <button type="submit" className="white-button">
                Acessar
              </button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
