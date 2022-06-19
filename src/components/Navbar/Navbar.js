import React from 'react'
import './Navbar.css'
function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-light" >
  <div className="container">
   <h2  style={{color:"#023047"}}>ATools.</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <button className='btn btn-primary' type='button' style={{backgroundColor:"#023047" ,borderColor:'#023047'}}>Start Free Trial</button> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  aria-current="page" href="#"> <button className='btn btn-primary' style={{backgroundColor:"orange",borderColor:"orange"}} type='button'>Login</button> </a>
        </li>
      
      
      </ul>
     
    </div>
  </div>
</nav>
  </div>
  )
}

export default navbar