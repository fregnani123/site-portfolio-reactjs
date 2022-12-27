import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (<div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
