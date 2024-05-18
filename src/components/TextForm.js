import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => { alert('Copied to clipboard!') });
        props.showAlert("Copied To Clipboared");
    }

    const handleFirstChar = () => {
        if (text[0] === text[0].toLowerCase()) {
            let newText = text[0].toUpperCase();
            let nextText = text.slice(1);
            setText(newText + nextText);
        }
        else if (text[0] === text[0].toUpperCase()) {
            let newText = text[0].toLowerCase();
            let nextText = text.slice(1);
            setText(newText + nextText);
        }
        props.showAlert("First Character Converted");
    }

    const handleBackspace = () => {
        for (let i = 0; i < text.length; i++) {
            let newText = "";
            let nextText = text.slice(1);
            setText(newText + nextText);
        }
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);    // Due to this we can type in textarea
    }

    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.Greymode==='lightgrey'?'lightpink':'white', color: props.Greymode==='lightgrey'?'white':'black'}}  value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstChar}>ConvertFirstChar</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>RemoveExtraSpaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBackspace}>BackSpace</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h3>Word & Character Count</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
                {/* <p>{text.length===0?"0":text.split(/\s+/).length} Words & {text.length} Characters</p> */}
            </div>
            <div className='container'>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
