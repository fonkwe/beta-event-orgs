import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
// import { Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
           <NavBar />
           <Home />
           <Contact />
      </div>
  );
}

export default App;
