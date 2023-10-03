import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg py-3 " style={{backgroundColor:'black'}}>
    <div class="container-fluid">
      <a style={{paddingLeft:'66px'}} class="navbar-brand text-light " href="#">Uber</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ">
        <li class="nav-item dropdown">
           <div className='link'>
              <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </a>
           </div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item ms-3 ">
            <div className='link'><a class="nav-link active text-light" aria-current="page" href="#">Safety</a></div>
          </li>

          <li class="nav-item ms-3" >
           <div className='link'> <a class="nav-link text-light" href="#">Help</a></div>
          </li>
         <div style={{marginLeft:'30rem'}}>
             <ul class="navbar-nav">
                  <li class="nav-item ">
                    
                   <div className='link'> <a class="nav-link text-light" href="#"><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z" fill="currentColor"></path></svg></span>EN</a></div>
                  </li>
                  <li class="nav-item ms-3">
                    <div className='link'><a class="nav-link text-light" href="#"><span><img style={{width:'18px',marginBottom:'2px'}} src="data:image/png;base64,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" alt="" /></span> Product</a></div>
                  </li>
                  <li class="nav-item ms-3">
                    <div className='link'><a class="nav-link text-light" href="#">Log in</a></div>
                  </li>
                  <li class="nav-item ms-3">
                  <button data-baseweb="button" aria-label="Sign up to ride, drive, and get delivery" class="css-ljsRJZ">Sign up</button>
                  </li>
             </ul>
         </div>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar