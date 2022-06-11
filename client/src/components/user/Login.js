import React, { Fragment, useState } from "react";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  // useEffect(()=>{
  //   console.log("hai",localStorage.rzp_device_id);
  // },[])
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const formData = {
        email,
        password,
      };

      const { data } = await axios.post("/api/users/login", formData, config);
      // console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      if (localStorage.userInfo) {
        navigate("/");
      }
    } catch (error) {
      setError("Invalid Login");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/Register");
  };

  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-lg-8 py-5 ps-5">
            <div className="form-head">
              <h3>Login</h3>
            </div>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <div className="form-body pt-2">
              <form action="" className="form" onSubmit={submitHandler}>
                <div className="input-field py-3">
                  <label htmlFor="">Email Address</label>
                  <input
                    className="email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    //required
                  />
                </div>
                <div className="input-field py-3">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    //required
                  />
                </div>

                <div className="submit  mx-3 pt-2 ">
                  <button className="submit-button  px-5 py-2" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <div className="pt-2">
                <a className="text-primary" href="/#" onClick={handleClick}>
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
