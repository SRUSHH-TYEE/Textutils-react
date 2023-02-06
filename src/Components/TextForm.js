import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "new text" // Wrong way to set new value
    // setText("new Text")// correct way to set new value
    const upClickHandler=()=>{
      // console.log("UpperCase is clicked")
      let newText = text.toUpperCase()
      setText(newText)
      props.showAlert("Converted to Upper Case", "success")
    }
    const handleOnChange=(event)=>{
      // console.log("On Change")
      setText(event.target.value)

    }
    const loClickHandler = ()=>{
      let newText = text.toLocaleLowerCase()
      setText(newText)
      props.showAlert("Converted to Lower Case", "success")

    }
  return (
    <>
<div className="container" style={{color: props.mode ==='dark'? 'white': 'black'}}>
    <h2 >{props.heading}</h2>
    <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color: props.mode ==='light'? 'black': 'white',backgroundColor: props.mode==='light'? 'white': 'gray'}}></textarea>
    <button className="btn btn-primary mx-2" onClick={upClickHandler}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={loClickHandler}>Convert to Lowercase</button>
</div>
<div className="container my-3" style={{color: props.mode ==='dark'? 'white': 'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * (text.split(" ").length)} minutes read</p>
</div>
</>
  )
}
