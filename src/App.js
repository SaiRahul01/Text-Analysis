// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// const gg=(<h4>Lmao</h4>);



function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const switchmode=()=>{
    if(mode==='dark')
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor='#222831';
      
      showAlert("Dark Mode has been enabled","success");
    }

  }
  return (
    <>
    <Router>
    <Navbar title="Text Analysiss" mode={mode} togglemode={switchmode}></Navbar><br />
    <Alert aalert={alert}/>
    <div className="container">
      <Routes>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
            <TextForm cont="Enter the Text to analyze" mode={mode} showAlert={showAlert}></TextForm>
            </Route>
          </Routes>
        
        
    </div>
    </Router>

  
    
    



    
    


    
    
    
    
    </>
  );
}

export default App;
