import React, {useState} from 'react'




export default function Textform(props) {

    const handleUpClick = (e)=>{


        if(e.target.id==='1'){
        let newtext=text.toUpperCase();
        setText(newtext);
        setButtonValue(2);
        setButtonText('Convert to LowerCase');
    
        }else{
        let newtext=text.toLowerCase();
        setText(newtext);
        setButtonValue(1);
        setButtonText('Convert to UpperCase');
     
        }

        
     } 

   
     const handleClearClick = (e)=>{

        let newtext="";
        setText(newtext);


       
     } 


    
    const handleOnChange = (e)=>{

        setText(e.target.value);
    }  
     
    const[buttontext,setButtonText] = useState("Convert to UpperCase");

    const[btnValue,setButtonValue] = useState(1);

    
    const [text,setText]= useState("Enter text here!");

  return (
    <div>
   
    <div  className="col-sm-2 col-form-label mt-5    mb-1">{props.heading}</div>
    <div className="col-sm-12">
      <textarea  className="form-control" rows="8" id="fo" value={text} onChange={handleOnChange}></textarea>
    </div>
    <div className="col-sm-10 mt-3">
    <button type="submit" className="btn btn-primary mb-3 mx-1" id={btnValue} onClick={handleUpClick}>{buttontext}</button>
    <button type="submit" className="btn btn-primary mb-3 mx-1" onClick={handleClearClick}>Clear Text</button>

    <div >Words: {text.split(" ").length} and Characters {text.length}</div>
  </div>

 
  </div>
  )
}
