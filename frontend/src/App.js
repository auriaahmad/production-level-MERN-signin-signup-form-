import './App.css';
import HomePage from './components/homepage/homepage';
import Login from './components/login/login'; 
import Signup from './components/signup/signup'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element = {user && user._id ? <HomePage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} />
        < Route path='/register' element = {<Signup />} />
        <Route path='/login' element = {<Login setLoginUser={setLoginUser}/>} />
      </Routes>
    </Router>      
    </div>
  );
}

export default App;