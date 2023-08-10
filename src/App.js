import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Cart from "./Screens/cart";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./Components/contextReducer";
import MyOrder from "./Screens/MyOrder";

function App() {
  return (
     <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/CreateUser" element={<Signup />} />
          <Route exact path ="/Cart" element={<Cart/>}/>
          <Route exact path ="/myOrder" element={<MyOrder/>}/>
       </Routes>
      </div>
    </Router>
    
    </CartProvider>
    
  );
}

export default App;
