import React from 'react'

const Footer = () => {
  return (
    <Footer>

        <div>
            <div>
                <h1>HOME</h1>
                <h1>WORK</h1>
                <h1>SERVICE</h1>
                <h1>ABOUT</h1>
                <h1>CAREERS</h1>
                <h1>CONTACT</h1>
            </div>
            <div>
                <h1 className='font-tusker'>FOLLOW US</h1>
                <a href="">Behance  </a>
                <a href="">Instagram</a>
                <a href="">Linkedin</a>
                <a href="">Youtube</a>
                <a href="">X (Twitter)</a>
            </div>
            <div>
                <h1>LET'S GET TALKING</h1>
                <button onClick={()=>{
                    alert("Dont click me, this is just a demo button.")
                }}>Contact Us</button>
            </div>
        </div>
        <div>
            <div>
                <h1></h1>
                <video >
                    <source />
                </video>
            </div>
            <div>
                <p>©2025 Stuvio Digital Private Limited</p>
                <div>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms and Conditon</a>
                    <a href="#">Back to Top</a>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default Footer