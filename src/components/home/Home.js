import React from 'react'
import './Home.css'
import Login from '../login/Login'
function home() {
  return (
    <>
      <div className='d-flex justify-content-between '>
        <div className='d-flex flex-column box m-auto '>
          <div className='d-flex flex-column align-items-center my-3 justify-content-center'>
            <h1> Welcome Back</h1>
            <h6 > Sub-title text goes here</h6>
          </div>
         <Login/>
        </div>
        <div className='home-img'>
          <img src="bg.png" alt="image"></img>
        </div>

      </div>
    </>
  )
}

export default home