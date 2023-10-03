import React from 'react'
import './Main.css'
import { Row,Col,Button} from 'react-bootstrap'




function Main() {
  return (
  <>
        <div style={{ height: '100vh' }} className="main  p-5">
        <div style={{width:'47%',marginLeft:'20px',backgroundColor:'white'}}className='data-field  p-5 shadow '>
        <Row className='ms-5'>
            <Col lg={4}><img className='ms-1' src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg" alt="" /><h6 className='txt'>Ride</h6></Col>
    
            <Col lg={4} className='ps-4'><img className='ms-3' src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg" alt="" /><h6 className='txt'>Drive or deliver</h6></Col>
    
            <Col lg={4} className='ps-5'><img className='ms-4' src="https://www.uber-assets.com/image/upload/v1674075480/assets/27/7a50c1-0782-405e-947c-83a2f4d78137/original/keys_car_filled.svg" alt="" /><h6 className='txt'>Rent your fleet</h6></Col>
    
        </Row>
        <hr />
        <h1>Request a ride now</h1>
        <div class="css-bwbuAu"><div role="combobox" aria-expanded="false" aria-owns="pickup-suggestions-listbox-0.38732055499355167" aria-haspopup="listbox" class="css-gizoBm"><input name="pickup" title="" aria-label="Enter a pickup location: address, city and state required" placeholder="Enter pickup location" autocomplete="off" type="text" aria-autocomplete="list" aria-controls="pickup-suggestions-listbox-0.38732055499355167" aria-activedescendant="false" class="css-kDPYnB" value=""/><div class="css-loYTDk"><svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 24 24" tabindex="0" role="button" aria-label="Locate me" class="pe-location-fetch css-ZSBbY"><path d="M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z"></path></svg></div></div><div role="combobox" aria-expanded="false" aria-owns="destination-suggestions-listbox-0.9403988771127796" aria-haspopup="listbox" class="css-TbLiS"><div class="css-cdQODT"><input name="destination" title="" aria-label="Where to?" placeholder="Enter destination" autocomplete="off" type="text" aria-autocomplete="list" aria-controls="destination-suggestions-listbox-0.9403988771127796" aria-activedescendant="false" class="css-kDPYnB" value=""/></div></div><div class="css-gCvyeW"></div></div>
       <div className='d-flex mt-5'>
       <Button className='me-3 py-2' variant="dark">Request now</Button>
       <Button variant="secondary">Schedule for later</Button>
       </div>
    
        </div>
        </div>


  </>


    
  )
}

export default Main