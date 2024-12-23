import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Users, Book, Info } from 'lucide-react';
import data from './data.json';
import './App.css';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { name: 'Notes', icon: <BookOpen size={20} /> },
    { name: 'Étudiants', icon: <Users size={20} /> },
    { name: 'Matières', icon: <Book size={20} /> },
    { name: 'À propos', icon: <Info size={20} /> }
  ];

  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="menu-button"
          >
            <Menu size={24} />
          </button>
          <div className="header-title">
            <img src="src/assets/logo.webp" alt="Logo" className="header-logo" />
            <div>
              <h1>Introduction à React</h1>
              <h2>À la découverte des premières notions de React</h2>
            </div>
          </div>
        </div>
      </header>

      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} 
           onClick={() => setIsDrawerOpen(false)} />
      
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Menu</h3>
          <button onClick={() => setIsDrawerOpen(false)} className="drawer-close">
            <X size={20} />
          </button>
        </div>
        <nav className="drawer-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button className="menu-item">
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className="main">
        <div className="time-display">
          <p>{formatDateTime(currentTime)}</p>
        </div>
        <RandomItem />
      </main>

      <footer className="footer">
        <p>© {currentTime.getFullYear()} - Younesse El Youssoufi, Tous droits réservés.</p>
      </footer>
    </div>
  );
};

const RandomItem = () => {
  const [item, setItem] = useState(data[Math.floor(Math.random() * data.length)]);

  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="card-title">{item.course}</h3>
        <p className="card-text">{item.student.firstname} {item.student.lastname} - {item.grade}%</p>
      </div>
      <button
        onClick={() => setItem(data[Math.floor(Math.random() * data.length)])}
        className="btn-random"
      >
        Afficher un nouvel élément
      </button>
    </div>
  );
};

export default App;