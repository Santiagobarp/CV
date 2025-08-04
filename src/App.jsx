import { Routes, Route } from 'react-router-dom';
import CV from './pages/CV';
import Evolve from './pages/Evolve';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CV />} />
      <Route path="/evolve" element={<Evolve />} />
    </Routes>
  );
}

export default App;
