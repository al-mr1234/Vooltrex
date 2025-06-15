
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contactanos from './components/Contactanos';
import Nosotros from './components/Nosotros';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
      {/* Aca se define la ruta principal y las otras rutas usando react-router-dom */}
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App; 