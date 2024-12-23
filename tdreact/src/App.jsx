import { useState } from 'react';
import './App.css';


function Header({ name }) {
  return (
    <header className="header">
      <img src="src/assets/logo.webp" alt="Logo de la formation" className="header-logo" />
      <h1>Introduction à {name}</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}


function MainContent() {
  const getCurrentDateTime = () => {
    const now = new Date();
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
    ];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    return `Bonjour, on est le ${day}, ${month} ${date}, ${year} et il est ${hour}:${minute}:${second}`;
  };

  return (
    <main className="main-content">
      <p>{getCurrentDateTime()}</p>
    </main>
  );
}


function Footer() {
  

  return (
    <footer className="footer">
      <p>©  - Younesse El Youssoufi, Tous droits réservés.</p>
    </footer>
  );
}


function App() {
  return (
    <>
      <Header name="React" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
