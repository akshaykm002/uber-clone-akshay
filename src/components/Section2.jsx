import React from 'react'
import {Button} from 'react-bootstrap'

function Section2() {
  return (
    <div className='get-started py-5'style={{paddingLeft:'66px'}}> 
    <h1 className='py-3'>The Uber you know, reimagined for business</h1>
    <p className='py-3'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
    <Button className='me-3' variant="dark" style={{padding:'10px 25px'}}>Get started</Button>
    </div>
  )
}

export default Section2