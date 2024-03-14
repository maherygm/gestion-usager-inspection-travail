import React, { useState } from 'react';
import authService from './auth/authService'; // Importe le service authService

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await authService.login(email, password);
      console.log('Logged in:', userData);
      // Gère la connexion réussie ici
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Se connecter</button>
      {error && <p>{error}</p>}
    </div>
  );
};

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const userData = await authService.register(name, email, password);
      console.log('Registered:', userData);
      // Gère l'inscription réussie ici
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>S'inscrire</button>
      {error && <p>{error}</p>}
    </div>
  );
};

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await authService.resetPassword(email);
      console.log('Reset Password:', response);
      // Gère la réinitialisation du mot de passe réussie ici
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Réinitialisation du mot de passe</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
      {error && <p>{error}</p>}
    </div>
  );
};

// Utilise ces composants dans ton application pour tester les fonctionnalités de login, register et reset password.
