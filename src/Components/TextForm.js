import React,{useState} from 'react'

export default function TextForm(props) {
  const handelUpclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success");
  }
  const handelLoclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success");
  }

  const handelClearclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cle", "success");
  }
  const handelOnchange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state
  return (
    <>
    <div className="container">
  
  <h1> {props.heading}</h1>
        
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange = {handelOnchange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handelUpclick}>convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handelLoclick}>convert to lowerrcase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handelClearclick}>clear the Text</button>
    </div>
    <div className="container my-3">
    <h1> Your text summery</h1>
    <p> {text.split(" ").filter((element) => {return element.length != 0 }).length} words and {text.length} chars</p>
    <p> {0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview
    </h2>
    <p>{text.length > 0?text:"Enter something in the textbox above to preview it here"}</p>
    </div> 
    </>
    
  
  )
}
 