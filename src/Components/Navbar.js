import "./Navbar.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "./contextReducer";
import Cart from "../Screens/cart";
import Modal from '../Modal';
export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  //  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  const loadCart = () => {
    setCartView(true);
  };
  const items = useCart();
  return (
  <div>
    <nav className="navbar navbar-expand-md  bg-iight">
      <Link className="navbar-brand" to="/"><h1><strong>HungerGO</strong></h1></Link>
     


        <div className="collapse navbar-collapse"  >
         <ul className="navbar-nav me-auto mb-2 ">
          <li className="nav-item">
      <Link className="nav-link active fs-5 "aria-current="page" to="/"><h4><strong>Home</strong></h4></Link>
         </li>{localStorage.getItem("authToken") ? 
          ( <li className="nav-item">
      <Link className="nav-link active fs-5" aria-current="page" to="/myOrder"><h4><strong>Orders</strong></h4></Link></li>
      ) :
         ( "" )}
          </ul>



         {!localStorage.getItem("authToken") ? (
   <div className="d-flex ms-auto ">
    <Link className="nav-link text-danger" to="/login"> <h4> <strong>Login</strong></h4></Link>
    <Link className="nav-link text-danger" to="/CreateUser"><h4><strong>SignUp</strong></h4></Link>
   </div>
          ) : (
    <div className="d-flex  ms-auto mb-2">
      <Link className="nav-link" onClick={loadCart} to="/"><h4><strong>My Cart{""}</strong></h4>
        <Badge pill bg="danger">{items.length}</Badge></Link>
      {cartView? <Modal onClose ={()=>setCartView(false)}><Cart></Cart></Modal>:null}   
       <div onClick={handleLogout}><Link className="nav-link"><h4><strong>LogOut</strong></h4></Link>
        </div>
     </div>
     )}




  </div>
 </nav>
</div>
  );
}

