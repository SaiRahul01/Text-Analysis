// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// const gg=(<h4>Lmao</h4>);



function App() {

  const [mode, setmode] = useState('Light');
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
    <Navbar title="Text Analysis" mode={mode} togglemode={switchmode}></Navbar>
    <Alert aalert={alert}/>
    <div className="container">
        <TextForm cont="Enter the Text to analyze" mode={mode}></TextForm>
    </div>
    {/* <div className="container">
    <About/>
    </div> */}
    
    



    
    


    
    
    
    
    </>
  );
}

export default App;
