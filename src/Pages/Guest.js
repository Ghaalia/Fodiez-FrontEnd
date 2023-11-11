import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import imgKUW from "../media/OIP.jpeg";
import pizza from "../media/pizza.jpeg";

const Guest = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
        <figure>
          <img src={imgKUW} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Kuwaiti Food</h2>
          <div className="card-actions justify-center ">
            <button className="btn flex justify-center w-20 text-xs btn-primary ">
              View more
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
        <figure>
          <img src={pizza} alt="pizza" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Italian Food</h2>
          <div className="card-actions justify-end">
            <button className="btn w-30 btn-primary ">View more</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
        <figure>
          <img src={pizza} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chinese Food</h2>
          <div className="card-actions justify-end">
            <button className="btn w-30 btn-primary ">View more</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
        <figure>
          <img src={imgKUW} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Kuwaiti Food</h2>
          <div className="card-actions justify-end">
            <button className="btn w-30 btn-primary ">View more</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
        <figure>
          <img src={imgKUW} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Kuwaiti Food</h2>
          <div className="card-actions justify-end">
            <button className="btn w-30 btn-primary ">View more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
