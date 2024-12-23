import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header() {
  return (
    <header className="header">
    <img src="src\assets\logo.webp" alt="Logo de la formation" className="header-logo" />
    <h1>Introduction à React</h1>
    <h2>A la découverte des premières notions de React</h2>
  </header>

  )
}

function MainContent() {
  return (
    <main className="main-content">
      <p>Ici, nous afficherons des informations intéressantes :)</p>
    </main>
  );
}





function Footer() {
  return (
    <footer className="footer">
      <p>Tous droits réservés - Younesse El Youssoufi </p>
    </footer>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Header />

        <MainContent />
      
      <Footer />
    </>
  )
}

export default App
