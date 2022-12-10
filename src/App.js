// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
       setAlert(null);
    },1500);
  }

  const toggleModeTwo = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#660000';
      showAlert("Red mode has been enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
  }
  const toggleModeThree = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#001a00';
      showAlert("Red mode has been enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00061a';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
      setInterval(()=>{
        document.title='TextUtils is Amazing';
      },2000);
      setInterval(()=>{
        document.title='Dowload TextUtils is Now';
      },1500);
    }
  }
  return (
    <>
    {/* <Router> */}
    <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleModeTwo={toggleModeTwo} toggleModeThree={toggleModeThree} />
    <Alerts alert={alert}/>
    <div className='container my-3' >
    {/* <Routes> */}
      {/* /users --> Component 1
      /users//home -->--> Component 2 */}
      {/* <Route path="/about" element={<About />}> </Route>
      <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text:" mode={mode} />}></Route> */}
    
    <TextForms showAlert={showAlert} heading="Enter the text:" mode={mode} />
    <About mode={mode} />
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
