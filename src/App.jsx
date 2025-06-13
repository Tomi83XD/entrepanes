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

export default App;
