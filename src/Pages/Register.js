import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center align-middle items-center">
      <div className="card w-96 bg-primary text-primary-content  shadow-2xl shadow-gray-600">
        <div className="card-body gap-7">
          <h2 className="card-title justify-center  font-mono text-2xl">
            Register
          </h2>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">UserName:</span>
            </label>
            <input
              type="text"
              placeholder="Enter your UserName"
              className="input input-bordered input-sm w-full max-w-xs "
            />

            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered input-sm w-full max-w-xs "
            />

            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="input input-bordered input-sm  w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Confirm Password:</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="input input-bordered input-sm  w-full max-w-xs"
            />

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose your profile Picture:</span>
              </label>
              <input
                type="file"
                className="file-input file-input-sm file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn">Register</button>
            <button onClick={() => navigate("/")} className="btn">
              Cancel
            </button>
          </div>

          <div className="card-actions justify-start">
            <button
              onClick={() => navigate("/login")}
              className="text-black text-sm hover:underline"
            >
              Already have an Account? Login!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
