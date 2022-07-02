import './App.css';
import login from "./login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './About';

function App() {
  return (
<div className="App">
    <Router>
    <Routes>
    <Route path='/login' element = {<login />} />
    <Route path='/About' element = {<About />} />
    
    

    </Routes>
    
    </Router>
   
    </div>
  )
}

export default App;
