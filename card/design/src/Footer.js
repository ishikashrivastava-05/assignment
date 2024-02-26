import React from 'react'
import "./Footer.css"
function Footer() {
    return (
       
        <>
            <div className="footer">
                <div className='conte' style={{display:"flex"}}>
                    <div className='col'>
                       <h4 className='catec'> Categories</h4><br></br>
                       <h5 style={{color:"rgba(182, 189, 196, 1)", fontSize:"13px"}}>Hosting</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Web Builder</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Data Center</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Robotic-Automation</h5>
                    </div>
                    <div className="col">
                    <h4 className='catec'> Contacts</h4><br></br>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Contact</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Privacy Policy</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Terms Of Service</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>Categories</h5>
                       <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px"}}>About</h5>
                    </div>
                    <div className="col">
                        <h5 style={{color:"rgba(182, 189, 196, 1)" ,fontSize:"13px", marginTop:"9rem"}}>United State <i class="fa-solid fa-angle-down" style={{ color: "rgba(209, 214, 218, 1)" }}></i></h5>
                    </div>
                </div>
            </div></>

    )
}

export default Footer
