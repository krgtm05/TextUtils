import React from 'react'

export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnstyle, setbtnstyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'grey'
    // })
    // const [btntext, setbtntext] = useState("Enable Dark Mode")
    // const togglStyle = () => {
    //     if (mystyle.color === 'black') {
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             // border:'1px solid white'
    //         })
    //         setbtntext("Enable Light Mode");
    //         setbtnstyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border:'1px solid black',
    //             // borderRadius:'20px'
    //             // style:'border-radius 5px'
    //         })
    //     }
    //     else {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: "white"
    //         })
    //         setbtntext('Enable Dark Mode');
    //         setbtnstyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border:'1px solid black',
    //             // borderRadius:'20px'
    //         })
    //     }
    // }
    
    let mystyle = {
        color: props.mode ==='dark'?'white':'#040b24',
        backgroundColor: props.mode ==='dark'?'#040b24':'white'
    }
    return (
        <div >
            <h2 className='my-2' style={{ color: props.mode ==='dark'?'white':'#040b24'}}> About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                        <strong> Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=' my-2 '>
                <button onClick={togglStyle} type='button' style={btnstyle} >{btntext}</button>
            </div> */}
        </div>
    )
}
