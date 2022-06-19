import React, { useState } from 'react'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
        const json = await response.json()
        console.log(json);
        alert(json.msg)
        alert("authToken :"+ json.authToken)
    }
    return (

        <form> <div className="mb-3">
            <input type="email" className="form-control"  value={email} onChange={(e) => {
                setemail(e.target.value)
            }} placeholder="Email Address * " />
        </div>
            <div className='mb-3'>
                <input type="password" className="form-control"  value={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} placeholder="Password * " />
            </div>
            <button type="submit" className=" button" onClick={handleSubmit}>Login</button>
            <div className='d-flex justify-content-between my-2'>
                <div className="form-check d-flex ">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember Password
                    </label>
                </div>
                <a href='#' >Forgot Password?</a>
            </div>


        </form>
    )
}

export default Login