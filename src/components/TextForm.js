import React,{useState} from 'react';



export default function TextForm(props) {





    const [text, setText] = useState('');
    // text is state variable
    const handleupperbtn=(event)=>{
        // console.log(`Upper Case Button was invoked`+text);
        let newText=text.toUpperCase();


        setText(newText);
        // event.preventDefault();
    }
    const handlelowererbtn=(event)=>{
        // console.log(`Upper Case Button was invoked`+text);
        let newText=text.toLocaleLowerCase();


        setText(newText);
        // event.preventDefault();
    }
    const handleonchange=(event)=>{
        // console.log(`Text was Changed`);
        setText(event.target.value);
    }
    const handleclearbtn=()=>{
        setText('');
        words=0;
        chars=0;
    }
    const handlecopy=()=>{
        let textt=document.getElementById('userText');
        // textt.select();
        navigator.clipboard.writeText(textt.value);


    }
    const removeextraspace=()=>{
        let filter=text.split(/[ ]+/);
        setText(filter.join(' '));
    }

    let words=text.split(" ").length;
    let chars=text.length;


  return (
    <>
    
        <div className="mb-3 my-5 container">
        <h3  className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>{props.cont}</h3>
            
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#222831':'white',
        color:props.mode==='light'?'black':'white'}}
        id="userText" onChange={handleonchange} rows="8"></textarea><br></br>
        
        <button className="btn btn-primary mx-2" onClick={handleupperbtn}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowererbtn}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-2" onClick={handleclearbtn}>Clear Text</button>
        <button className="btn btn-danger mx-2" onClick={removeextraspace}>Remove Extra Spaces</button>
        <i class="fas fa-clipboard"></i>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy to Clipboard</button>
        </div>
        <div className="container" id='wtf' >
            <h3 style={{color:props.mode==='dark'?'white':'black'}}>Text Summary</h3>
            <p style={{color:props.mode==='dark'?'white':'black'}}>Characters: {chars}</p>
            <p style={{color:props.mode==='dark'?'white':'black'}}>Words: {words}</p>
            {/* <p>Time Read: {0.08*words} Minutes</p> */}

        </div>
    </>





  );
}
