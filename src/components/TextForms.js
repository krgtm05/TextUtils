import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");

    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared","success");

    }
    const handleItalic = () => {
        const mySent = text;
        const words = mySent.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        let newText = words.join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalized","success");

    }

    const handleOnChange = (event) => {
        // console.log("onChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div classsName="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading} </h1>
                <div classname="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#001a1a':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase </button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to LowerCase </button>
                <button className="btn btn-primary my-3" onClick={handleItalic}>CaPaTaLiZe </button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleClear}>Clear </button>

            </div>
            <div classname='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 >Your text summary</h2>
                <p >{text.split(" ").length} words and {text.length} characters</p>
                <p >{0.008 * text.split(" ").length} minutes reading time</p>
                <h2 >Preview</h2>
                <p >{text.length>0?text:"Enter Something in textbox to preview here-"}</p>
            </div>
        </>
    )
}
