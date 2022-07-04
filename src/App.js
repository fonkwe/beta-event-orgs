import './App.css';
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './About';
import Contact from './Contact';

function App() {
  return (
<div className="App">
    <Router>
    <Routes>
    <Route path='/Login' element = {<Login />} />
    <Route path='/About' element = {<About />} />
    <Route path='/Contact' element = {<Contact />} />

    </Routes>
    
    </Router>
   
    </div>
  )
}

export default App;
