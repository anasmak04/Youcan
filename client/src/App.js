import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Redirect from './redirect/Redirect'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={< Home/>}></Route>
        <Route path="/Register" element={< Register/>}></Route>
        <Route path="/Login" element={< Login/>}></Route>
        <Route path="/Contact" element={< Contact/>}></Route>
        <Route path="/Redirect" element={< Redirect/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
