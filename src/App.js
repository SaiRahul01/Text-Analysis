// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// const gg=(<h4>Lmao</h4>);



function App() {

  const [mode, setmode] = useState('Light');
  const switchmode=()=>{
    if(mode==='dark')
    {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }

  }
  return (
    <>
    <Navbar title="Text Analysis" mode={mode} togglemode={switchmode}></Navbar>
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
