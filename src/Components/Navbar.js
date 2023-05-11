import React from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function Navbar() {

 const navigate = useNavigate();
 const handleLogout=()=>{
  localStorage.removeItem("authToken");
  navigate("/");
 }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <Link className="navbar-brand text-danger fs-1 fw-bold " to="/">
          <h1><strong>HungerGo</strong></h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="navbarSupportedContent"
          aria-controls="/navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
              <Link className="nav-link active fs-5 text-dark" aria-current="page" to="/">
                <h4><strong>Home</strong></h4> 
              </Link>
            </li>
             {(localStorage.getItem("authToken"))?
                   <li className="nav-item">
                   <Link className="nav-link active fs-5 text-dark" aria-current="page" to="/">
                     <h4><strong>My Orders</strong></h4> 
                   </Link>
                 </li>
              
             
             :""}
              </ul>
             {(!localStorage.getItem("authToken"))?
            <div className="d-flex ms-auto">
            <Link className="nav-link text-dark " to="/login"><h4><strong>Login</strong></h4></Link>
             <Link className="nav-link text-dark " to="/CreateUser"><h4><strong>SignUp</strong></h4></Link>
            </div>
             :   <div className="d-flex ms-auto">
                 <div><Link className="nav-link text-warning " to="/"><h4><strong>My Cart</strong></h4></Link></div> 
                <div onClick={handleLogout}><Link className="nav-link text-warning "><h4><strong>LogOut</strong></h4></Link></div>
                </div> }

         
           
          

        </div>
      </nav>
    </div>
  );
}
