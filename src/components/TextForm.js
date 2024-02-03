import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUppercase = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleLowercase = () => {
        // console.log('lowercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the Text", 'success');
    }
    const SpeakText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const CopyText = () => {
        let text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard', 'success');
    }
    const RemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Spaces Removed', 'success');
    }

    const handleonChange = (event) => {
        // console.log('handle on Change');
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
            <div style={{color: props.mode === 'dark'?'white':'black'}}>
                <h3 className='my-3'>{props.heading}</h3>
                <div className="mb-3">
                    <label htmlFor="myText" className="form-label">Enter myText</label>
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#343a40':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleonChange} id="myText" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={SpeakText}>Speak Text</button>
                <button className="btn btn-primary mx-2" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={RemoveSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minutes read time</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>

    )
}
