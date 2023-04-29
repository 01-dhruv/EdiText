import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color : 'black',
    //         backgroundColor : 'white',
    //     }
    // )
    
  // let myStyle = {
  //   backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey',
  //   color : props.mode ==='light' ? 'black' : 'white'
  // }
let myStyle={backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}
    // const [btnText, setbtnText] = useState('Enable Dark Mode')

    // const changeStyle = ()=>{
    //     if(myStyle.backgroundColor ===  'white'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //         })
    //         setbtnText('Enable Light Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //         })
    //         setbtnText('Enable Dark Mode')
    //     }
    //     }
    
  return (
    <>
    <div style={{myStyle}}>

    <h2 className='title my-2' style={{myStyle}}>About Us</h2>
    <h6>Read about all features that we offer</h6>

    <div className="accordion my-3" id="accordionExample">


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        UpperCase
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
      The UpperCase method returns the string in uppercase letter. In other words, it converts all characters of the string into upper case letter.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        LowerCase
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
      The LowerCase method returns the string in lowercase letter. In other words, it converts all characters of the string into lower case letter.      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Clear Text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Reverse Text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Copy Text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Remove Extra Spaces
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Find and Replace
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode ==='light' ? 'white' : 'darkgrey', color : props.mode ==='light' ? 'black' : 'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>


</div>

{/* <button type="button" className="btn btn-primary my-1 mx-2" onClick={changeStyle}>{btnText}</button> */}

</div>
</>
  )
}
