import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [Greymode, setGreyMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage) => {
    setAlert(massage);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled");
      // document.title = 'Light Mode';
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#0e1525';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled");
      // document.title = 'Dark Mode';
    }
  }

  const toggleGreyMode = () => {
    if (Greymode === "lightgrey") {
      setGreyMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled");
    }
    else {
      setGreyMode("lightgrey");
      document.body.style.backgroundColor = 'lightgrey';
      document.body.style.color = 'black';
      showAlert("Grey Mode Enabled");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="textutils" aboutText="About" mode={mode} Greymode={Greymode} toggleMode={toggleMode} toggleGreyMode={toggleGreyMode} /> {/* passed as a props*/}
        {/* <Navbar/> In this case defaultprops values get used*/}
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} title="Convert Text" Greymode={Greymode} toggleGreyMode={toggleGreyMode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
