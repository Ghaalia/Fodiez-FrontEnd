import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center align-middle items-center">
      <div className="card w-96 bg-primary text-primary-content  shadow-2xl shadow-gray-600">
        <div className="card-body gap-7">
          <h2 className="card-title justify-center  font-mono text-2xl">
            Login
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
              <span className="label-text">Password:</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="input input-bordered input-sm  w-full max-w-xs"
            />
          </div>

          <div className="card-actions justify-end">
            <button className="btn">Login</button>
            <button onClick={() => navigate("/")} className="btn">
              Cancel
            </button>
          </div>

          <div className="card-actions justify-start">
            <button
              onClick={() => navigate("/register")}
              className="text-black text-sm hover:underline"
            >
              Don't have an Account? Register Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
