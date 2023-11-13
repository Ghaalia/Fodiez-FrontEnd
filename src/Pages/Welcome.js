import React from "react";
import image1 from "../media/1.jpeg";
import image2 from "../media/2.jpeg";
import image3 from "../media/3.jpeg";
import image4 from "../media/4.jpeg";
import image5 from "../media/5.jpeg";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative flex flex-col align-middle items-center justify-evenly h-screen ">
      <div className=" shadow-xl shadow-gray-400 carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img src={image1} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image4} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image5} className="rounded-box" />
        </div>
        {/* repeated images  */}

        <div className="carousel-item">
          <img src={image1} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image4} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={image5} className="rounded-box" />
        </div>
      </div>

      <div className="flex justify-evenly align-middle items-center  gap-10">
        <div className="flex flex-col justify-center items-center align-middle gap-8 ">
          <div className="text-7xl font-serif font-medium underline underline-offset-2 decoration-blue-300 ">
            {" "}
            Foodiez{" "}
          </div>
          <div className="stats shadow-xl">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Recipies</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body flex flex-col justify-center align-middle  gap-9">
            <div>
              <h2 className="card-title">
                {" "}
                Discover a world of flavors right at your fingertips, Only on
                Foodiez!
              </h2>
            </div>

            <div className="card-actions justify-center">
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-primary"
              >
                Register
              </button>
            </div>

            <div className="card-actions justify-end">
              <button
                onClick={() => navigate("/HomePage")}
                className="btn btn-primary"
              >
                Continue as a Guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
