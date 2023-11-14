import React from "react";
import ProfilePic from "../media/ProfilePic.jpeg";

const Settings = () => {
  return (
    <div className="flex border border-black h-screen justify-center align-middle items-center">
      <div className="card flex flex-col gap-5 justify-center items-center w-[50%] shadow-xl shadow-gray-400 bg-accent">
        <img
          className="rounded-full shadow-xl shadow-gray-500"
          src={ProfilePic}
          alt="Profile Picture"
        />

        <div className="border border-black flex flex-col gap-5">
          <div className="form-control">
            <div className="input-group">
              <span className="label-text">Fisrt Name:</span>

              <input
                type="text"
                placeholder="First Name "
                className="input input-bordered input-sm"
              />
              <button className="btn btn-square btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="form-control">
            <div className="input-group">
              <span className="label-text">UserName:</span>

              <input
                type="text"
                placeholder="@UserName "
                className="input input-bordered input-sm"
              />
              <button className="btn btn-square btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="form-control">
            <div className="input-group">
              <span className="label-text">Password:</span>

              <input
                type="text"
                placeholder="Password "
                className="input input-bordered input-sm"
              />
              <button className="btn btn-square btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5"></div>
      </div>
    </div>
  );
};

export default Settings;
