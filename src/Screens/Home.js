import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

export default function Home() {
  const [search , setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:8000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodCat(response[1]);
    setFoodItem(response[0]);
  };

  //useeffect is react hook which effects the data when we load data on page .
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>



      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control mx-sm-2 bg-dark"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search} onChange={(e)=>{setSearch(e.target.value)}}
                />
               <button
                  className="btn btn-outline-success my-2 my-sm-0 text-black bg-info "
                  type="submit"
                >
                  <strong>Search</strong>
                </button>
              </div>
            </div>

            <div className="carousel-item active">
              <img
                src="https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?pizza"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?Food"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {foodCat !== [] //ternary operator
          ? foodCat.map((data) => {
              //map means this much time we fetching data like for loop
              //ln-48 is for taking the main category names from backend
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3 text-warning">
                    <strong>{data.CategoryName}</strong>
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodName={filterItems.name}
                              options={filterItems.options[0]}
                              imgSrc={filterItems.img}
                              description={filterItems.description}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No data </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
