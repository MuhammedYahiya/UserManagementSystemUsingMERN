import React, { useState, Fragment } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


function AdminRegister() {

  // const [fname, setFname] = useState("")
  // const [lname, setLname] = useState("")
  // const [phone, setPhone] = useState("")
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
      const { data } = await axios.post("/api/admin/adminregister", {
        email,
        password,
      }, config)
      console.log(data);
      navigate('/adminlogin')
    }
    catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (

    <Fragment>
      <div className="container pt-5">
        <div className="row  pt-5" >
          <div className="col-lg-10 border shadow py-5 ps-5">
            <div className="form-head">
              <h3>Create Admin Account</h3>
            </div>
            <div className="form-body pt-2">
              <form action="" className='form' onSubmit={submitHandler} >
                <div className='input-field py-3'>
                  <label htmlFor="">Email Address</label>
                  <input className='email' type='email' name='email'
                    value={email} onChange={((e) => {
                      setEmail(e.target.value)
                    })} required />
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Password</label>
                  <input type="password" name='password'
                    value={password} onChange={((e) => {
                      setPassword(e.target.value)
                    })} required />
                </div>
                <div className="submit  mx-3 text-end">
                   <button className='submit-button-cancel  px-5 py-2 mx-1' type='reset'>Cancel</button> 
                  <button className='submit-button  px-5 py-2' type='submit' >submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default AdminRegister