import React from 'react'
import './Section3.css'

function Section3() {
  return (
   <div >
        <h2 style={{padding:'80px 0px 35px 67px' }}>Focused on safety, wherever you go</h2>
        <div className='d-flex justify-content-evenly w-100'>
            <div style={{width:'41%'}} >
                <img style={{width:'500px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_824,h_550/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="" />
                <h5 className='py-3'>Our commitment to your safety</h5>
                <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>

               <div className='d-flex'>
                <p>
                     <a style={{color:'black'}} href="">Read about our Community Guidelines</a>
                     <a style={{color:'black',paddingLeft:'30px'}} href="">See all safety features</a>
                </p>

               </div>
    
            </div>
            <div style={{width:'41%'}}>
                <img style={{width:'500px'}}  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_824,h_550/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="" />
                <h5 className='py-3'>Setting 10,000+ cities in motion</h5>
                <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                <p><a style={{color:'black'}} href="">View all cities</a></p>
    
            </div>
        </div>

        <div style={{paddingLeft:'43px',paddingTop:'120px',paddingBottom:'120px'}} className='d-flex justify-content-evenly'>
            <div style={{width:'28%'}}>
            <img style={{paddingBottom:'20px'}} src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_36,h_36/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg" alt="Multiple people" role="presentation" aria-hidden="true" class="css-kGIRRZ"/>
                <h5 style={{paddingBottom:'20px'}}>About us</h5>
                <p style={{paddingBottom:'20px'}}>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                <a style={{color:"black"}} href="">Learn more about Uber</a>
            </div>

            <div style={{width:'28%'}}>
            
            <img style={{paddingBottom:'20px'}} src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_36,h_36/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg" alt="Document" role="presentation" aria-hidden="true" class="css-kGIRRZ"></img>
            <h5 style={{paddingBottom:'20px'}}>Newsroom</h5>
                <p style={{paddingBottom:'20px'}}>See announcements about our latest releases, initiatives, and partnerships.</p>
                <a style={{color:'black'}} href="">Go to Newsroom</a>
            </div>

            <div style={{width:'28%'}}>
            
            <img style={{paddingBottom:'20px'}} src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_36,h_36/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg" alt="Home" role="presentation" aria-hidden="true" class="css-kGIRRZ"></img>
            <h5 style={{paddingBottom:'20px'}}>Global citizenship</h5>

                <p style={{paddingBottom:'20px'}}>Read about our commitment to making a positive impact in the cities we serve.</p>
                <a  style={{color:'black'}} href="">See our partnerships</a>
            </div>


        </div>
   </div>
  )
}

export default Section3