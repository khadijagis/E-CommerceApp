
import React from 'react';
import './Login.css';


function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Connexion</h2>
        <input type="email" placeholder="Adresse email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
        <p className="register-link">Pas de compte ? <a href="#">Créer un compte</a></p>
      </form>
    </div>
  );
}

export default Login;
