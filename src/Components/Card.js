import React from "react";

export default function Card(props) {


  let options = props.options;
  let priceOptions = Object.keys(options);
  return (
    <div>
      <div >
        <div
          className="card mt-3 "
          style={{ width: "18rem"}}
        >
          <img src={props.imgSrc} className="card-image-top" alt="img" style={{height:"120px",objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title fw-bolder">{props.foodName}</h5>
            <p className="card-text">{props.description}.</p>

            <div className="container ">
              <select className="m-2 h-50 bg-info rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-50 bg-info rounded">
               {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
               })}

              </select>

              <div className="d-inline fs-5 ">Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
