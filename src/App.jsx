// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambia Switch por Routes
import Header from './components/Header';
import Body from './components/Body';
import HeaderBodyDivider from './components/HeaderBodyDivider';
import Catalogo from './components/Catalogo';

function App() {
    return (
        <Router>
            <>
                <Header />
                <HeaderBodyDivider />
                <Routes> {/* Cambia Switch por Routes */}
                    <Route path="/" element={<Body />} /> {/* Usa el prop element */}
                    <Route path="/catalogo" element={<Catalogo />} /> {/* Usa el prop element */}
                </Routes>
            </>
        </Router>
    );
}
// Al final de tu archivo principal de React (ej. index.js o App.js)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.log('Fallo el registro del Service Worker:', error);
      });
  });
}
export default App;
