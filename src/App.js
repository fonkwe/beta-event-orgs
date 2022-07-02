import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
// import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
// import { Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <NavBar />
          <Home />
          
      </div>
  );
}

export default App;
