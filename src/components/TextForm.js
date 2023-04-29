import React, { useState } from 'react'

export default function TextForm(props) {

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleOldWordChange = (event) => {
        setOldWord(event.target.value)
        // console.log(setOldWord)
    }

    const handleNewWordChange = (event) => {
        setNewWord(event.target.value)
        // console.log(newWord)

    }

    const upperCase = () => {
        // console.log("Uppercase Clicked")
        setText(text.toUpperCase())
    }

    const lowerCase = () => {
        // console.log("Lowercase Clicked")
        setText(text.toLowerCase())
    }

    const clearText = () => {
        setText("")
    }


    const replaceword = () => {
        setText(text.replaceAll(oldword, newWord))
    }
    // const mirrorText = () => {
    //     setText(text.split(" ").reverse().join(" "))
    // }

    const revText = () => {
        setText(text.split("").reverse().join(""))
    }

    const copyText = () => {
        var cpytext = document.getElementById('exampleFormControlTextarea1')
        cpytext.select()
        cpytext.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(cpytext.value)
        // console.log(cpytext)
    }

    const removespaces = () => {
        let newtxt = text.split(/[ ] + /);
        setText(newtxt.join(" "))
    }

    const [text, setText] = useState("Enter Text Here")
    const [oldword, setOldWord] = useState("Enter Old Word Here")
    const [newWord, setNewWord] = useState("Enter New Word Here")


  return (
    <>
    <div className='container'>

        <div className="mb-3">
        <h2><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text below</label></h2>
        {/* <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={handleChange}></textarea> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={handleChange} style={{border: 'solid', backgroundColor : props.mode === 'light' ? 'white' : 'darkgrey'}}>Enter Text Here</textarea>
        </div>

    <button type="button" className="btn btn-primary mx-2 my-2" onClick={upperCase}>To UpperCase</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={lowerCase}>To LowerCase</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
    {/* <button type="button" className="btn btn-primary mx-2 my-2" onClick={mirrorText}>Mirror Image of Text</button> */}
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={revText}>Reverse Text</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={removespaces}>Remove Extra Spaces</button>

        <div className="mb-3">
        <h5><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Word To be Replaced</label></h5>
        {/* <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={handleChange}></textarea> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" value={oldword} rows="1" onChange={handleOldWordChange} style={{border: 'solid', backgroundColor : props.mode === 'light' ? 'white' : 'darkgrey'}}>Enter Old Word</textarea>
        </div>

        <div className="mb-3">
        <h5><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter New Word</label></h5>
        {/* <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={handleChange}></textarea> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" value={newWord} rows="1" onChange={handleNewWordChange} style={{border: 'solid', backgroundColor : props.mode === 'light' ? 'white' : 'darkgrey'}}>Enter New Word</textarea>
        </div>

        <button type="button" className="btn btn-primary mx-2 my-2" onClick={replaceword}>Replace Word</button>


    </div>

    <div className='container my-3'>
        <p>Entered Text contains {text.split(" ").filter( (element) => { return element.length !== 0 }  ).length} Words and {text.length} characters</p>
        <h3>Result</h3>
        <p>{text.length>0? text : 'Enter Some Text'}</p>
    </div>
    </>
  )
}