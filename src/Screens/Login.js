import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();// usenavigate hook for navigating to  home page from this login page  
  //below is the button or the handlesubmit button which is the endpoint of our application here and after hitting submit button this below code works
  // at line 14 preventdefault is the sythetic function in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials !!!");
    }
    
    if (json.success) {
      localStorage.setItem("authToken", json.authToken); //taking authtoken and converting it in json format using setitem
      console.log(localStorage.getItem("authToken"))  // printing it and saving it in localstorage or in a  cache memory before we navigate to homepage
      navigate("/"); // navigate to home page here using navigation hook in router 
    }
  };
  //
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container " >
      <>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email Address</strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-info text-dark">
            <strong>Login</strong>
          </button>
          <Link
            to="/createuser"
            className=" m-3 text-dark btn btn-danger rounded"
          >
            <strong>Create Account</strong>
          </Link>
        </form>
      </>
    </div>
  );
}
