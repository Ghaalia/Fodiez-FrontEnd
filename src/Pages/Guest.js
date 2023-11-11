import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import imgKUW from "../media/OIP.jpeg";
import pizza from "../media/pizza.jpeg";
import breakfast from "../media/breakfast.jpg";
import american from "../media/american food.webp";
import labanese from "../media/labanese.jpeg";
import indian from "../media/Indian-food-specialties.jpg";
import sushi from "../media/sushi.jpeg";
const Guest = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen items-center justify-evenly align-middle flex-wrap ">
        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl ">
          <figure>
            <img className="h-50" src={imgKUW} alt="food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kuwaiti Food</h2>
            <div className="card-actions justify-center ">
              <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
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
            <h2 className="card-title flex justify-center text-L">
              Italian Food
            </h2>
            <div className="card-actions justify-end">
              <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                View more
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
          <figure>
            <img src={sushi} alt="food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Japanese Food</h2>
            <div className="card-actions justify-end">
              <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                View more
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
          <figure>
            <img src={breakfast} alt="food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Breakfast</h2>
            <div className="card-actions justify-end">
              <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                View more
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
          <figure>
            <img src={american} alt="food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">American Food</h2>
            <div className="card-actions justify-end">
              <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                View more
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
          <figure>
            <img src={labanese} alt="food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lebanese Food</h2>
            <div className="card-actions justify-end">
              <button className="btn w-30 btn-primary ">View more</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl">
          <figure>
            <img src={indian} alt="food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Indian Food</h2>
            <div className="card-actions justify-end">
              <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
