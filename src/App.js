// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [smode, setSMode] = useState('success');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'GMText - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'GMText - Light Mode';
    }
  }

  const toggleSMode = () => {
    if (mode === "light") {
      setSMode('success');
      document.body.style.backgroundColor = '#14A44D';
      showAlert('Success Mode has been enabled', 'success');
    }
    else {
      setSMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar brand="GMText" aboutText="About us" mode={mode} toggleMode={toggleMode} smode={smode} toggleSMode={toggleSMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route exact path="/about"> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm heading="My Text" mode={mode} showAlert={showAlert} />
        <About />
        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>

  );
}


export default App;
