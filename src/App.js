import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Trade from './components/Trade';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/trade" element={<Trade />} />
          
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
