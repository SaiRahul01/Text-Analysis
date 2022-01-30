import React, { useState } from 'react';

export default function About() {

  const [mystyle,switchstyle]=useState({
      color:'black',
      backgroundColor:'white'
  });

  const [btnstate, setbtnstate] = useState('Enable Dark Mode');



  let changemode=()=>{
    if(mystyle.color=='white')
    {
      switchstyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtnstate('Enable Dark Mode')
    }
    else
    {
      switchstyle({
        color:'white',
        backgroundColor:'black'
      })
      setbtnstate('Enable Light Mode')
    }
  }


  return (
    <>
      <div className="main " >
      <div className="accordion" id="accordionExample" >
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About the App
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Text Analysiss</strong> helps you in many ways such as computing the number of words,characters and removing the extra spaces
            int the text pasted, and helps you copy the text you type.
            Converting the text to all uppercase and all Lower Cases. It has the functionality of switching between the light and dark themes,
            as per your choice 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Contact
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Email :</strong> sairahul0411@gmail.com <br></br>
           <a href="https://www.linkedin.com/in/sai-rahul01/">Linkedin</a>
          </div>
        </div>
      </div>
      

      {/* <div className="contianer">
      <button type="button" onClick={changemode}  className="btn btn-primary my-3">{btnstate}</button>
      </div> */}

    </div>





      </div>
    
    
    
    
    
    
    
    </>




  );
}
