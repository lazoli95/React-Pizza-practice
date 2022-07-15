import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRouts from './components/AnimatedRoutes';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
          <AnimatedRouts />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
