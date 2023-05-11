import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  let navigate=useNavigate();
   //below is the button or the handlesubmit button which is the endpoint of our application here and after hitting submit button this below code works 
  // at line 14 preventdefault is the sythetic function in reactjs 
   const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });


    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials !!!");
    }

    if (json.success) {
      navigate("/");
    }
  };
 //
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  return (
    // for line 30 creating end point here when we hit create account button then onsubmit we creating handlesubmit function above

    <div className="container ">
      <>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="Address" className="form-label">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Keep me sign in
            </label>
          </div>

          <button type="submit" className="m-3 text-dark btn btn-info rounded ">
            <strong>Sign in</strong>{" "}
          </button>
          <Link to="/login" className=" m-3 text-dark btn btn-danger rounded"> 
            <strong>Already A User</strong>
          </Link>
        </form>
      </>
    </div>
  );
}
//ln 115--> for here we are creating link to this button when we hit this it get redirect to the login page  