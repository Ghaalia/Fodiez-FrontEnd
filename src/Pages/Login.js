import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/homepage");
  }

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: login_mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      navigate("/homepage");
      setUser(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login_mutate();
  };

  useEffect(() => {
    if (user) navigate("/homepage");
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
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
                name="username"
                onChange={handleChange}
                placeholder="Enter your UserName"
                className="input input-bordered input-sm w-full max-w-xs "
              />

              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your Password"
                className="input input-bordered input-sm  w-full max-w-xs"
              />
            </div>

            <div className="card-actions justify-end">
              {isPending ? (
                <button disabled className="btn">
                  Loading ...
                </button>
              ) : (
                <button type="submit" className="btn">
                  {/* HEREEEEEEE */}
                  Login
                </button>
              )}

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
    </form>
  );
};

export default Login;
