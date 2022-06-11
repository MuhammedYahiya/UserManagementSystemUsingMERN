import React, { useEffect, useState, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './home.css'
import Header from './Header';



const Home = () => {
  const [name, setName] = useState("user")
  let navigate = useNavigate();


  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")
    const info = JSON.parse(userInfo)
    setName(info ? info.fname : "user")
    if (userInfo) {
      navigate('/')
    } else {
      navigate("/login")
    }

  }, [navigate])
  return (

    <Fragment>
      <Header title={name} />
      <div className="container-fluid pt-5 ">
        <div className='row pt-5 text-center'>
          <h1>Welcome</h1>
        </div>
      </div>
    </Fragment>

  )
}

export default Home
