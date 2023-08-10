import React, { useEffect, useState ,useRef } from "react";
import { useDispatchcart , useCart } from './contextReducer'
export default function Card(props) {

  let dispatch = useDispatchcart();
  const data = useCart();
  let priceRef = useRef(); // this is the react hook use for final price of products here 
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty , setQty] = useState(1);
  const [size , setSize]= useState("");
  const handleAddToCart = async () => {
         
           let food = []
             for (const item of data) {
            if (item.id === props.foodItem._id) {
            food = item;

             break;
             }
           }

         if(food !== []){
          if(food.size=== size){
            await dispatch({type:"UPDATE" , id: props.foodItem._id,price: finalPrice , qty :qty})
            return ;
          }
          else if(food.size !==size){
            await dispatch({type:"ADD", id:props.foodItem._id,name : props.foodItem.name ,price:finalPrice ,qty:qty , size: size})
            return
          }
          return 
         } 
         await dispatch({type:"ADD", id:props.foodItem._id,name : props.foodItem.name ,price:finalPrice ,qty:qty , size: size})
        
        } ;
        let finalPrice = qty* parseInt(options[size]);
        useEffect(()=>{
          setSize(priceRef.current.value)
        },[])


  return (
    <div>
      <div>
        <div className="card mt-3 " style={{ width: "18rem" }}>
          <img
            src={props.foodItem.img}
            className="card-image-top"
            alt="img"
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder">{props.foodItem.name}</h5>
            <p className="card-text">{props.foodItem.description}.</p>

            <div className="container ">
              <select className="m-2 h-50 bg-info rounded" onChange={(e)=> setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-50 bg-info rounded" ref ={priceRef} onChange={(e)=> setSize(e.target.value)}>
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>

              <div className="d-inline h-100 fs-5 "> ₹{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button
              className={"btn btn-info justify-center  ms-2"}
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
