import React from 'react'

function Section4() {
  return (
    <>
    <h2 style={{paddingLeft:'80px'}} className='fw-5'>Ride with Uber</h2>
    <div style={{paddingTop:'70px'}} className='d-flex justify-content-evenly w-100'>
        <div style={{width:'32%'}} className='d-flex'>
            <img style={{width:'170px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png" alt="" />
            <div>
                <h4>Uber Auto</h4>
                <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.</p>
            </div>

        </div>
        <div  style={{width:'32%'}} className='d-flex'>
            <img style={{width:'170px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt="" />
            <div>
                <h4>Uber Moto</h4>
                <p>Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber Moto.</p>
            </div>

        </div>
    </div>
    <div style={{paddingTop:'70px',paddingBottom:'100px'}} className='d-flex justify-content-evenly w-100'>
        <div style={{width:'32%'}} className='d-flex'>
            <img style={{width:'170px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="" />
            <div>
                <h4>Uber Rentals</h4>
                <p>Book Rentals to save time with one car and driver for your multi-stop trips.</p>
            </div>

        </div>
        <div  style={{width:'32%'}} className='d-flex'>
            <img style={{width:'170px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png" alt="" />
            <div>
                <h4>Uber Intercity</h4>
                <p>Book Intercity to head outstation anytime in convenient and affordable cars..</p>
            </div>

        </div>
    </div>


    </>
  )
}

export default Section4