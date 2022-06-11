import React, { useState, Fragment } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './register.css'

function Register() {

  const [fname, setFname] = useState("")
  // const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post("/api/users", {
        fname,
        // lname,
        phone,
        email,
        password,
      }, config)
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data))
      navigate('/login')
    }
    catch (error) {
      console.log(error.response.data.message);
    }
  }
  const clickHandle = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row  pt-5" >
          <div className="col-lg-10 py-5 ps-5">
            <div className="form-head">
              <h3>Create An Account</h3>
            </div>
            <div className="form-body pt-2">
              <form action="" className='form' onSubmit={submitHandler} >

                <div className='input-field py-3'>
                  <label htmlFor="">First Name</label>
                  {/* <p>{errors.fname}</p> */}
                  <input className='px-2' type="text"
                    value={fname} onChange={((e) => {
                      setFname(e.target.value)
                    })} required />
                
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Mobile Number</label>
                  <input className='number ps-2' name='phone' type='number'
                    value={phone} onChange={((e) => {
                      setPhone(e.target.value)
                    })} required />
                  {/* <p className='text-danger'>{errors.phone} </p> */}
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Email Address</label>
                  <input className='email' type='email' name='email'
                    value={email} onChange={((e) => {
                      setEmail(e.target.value)
                    })} required />
                  {/* <p className='text-danger'>{errors.email} </p> */}
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Password</label>
                  <input type="password" name='password'
                    value={password} onChange={((e) => {
                      setPassword(e.target.value)
                    })} required />
                </div>
                <div className="submit  mx-3 pt-2">
                  <button className='submit-button  px-5 py-2' type='submit' >submit</button>
                </div>
              </form>
              <div className="pt-2">
                <h4>or</h4>
                <a className='text-primary' href="/#" onClick={clickHandle}>Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  )
}
export default Register