import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import HomePage from "./HomePage";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: register_mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      navigate("/homepage");
      setUser(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register_mutate();
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
              Register
            </h2>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">UserName:</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter your UserName"
                name="username"
                className="input input-bordered input-sm w-full max-w-xs "
              />

              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter your Email"
                name="email"
                className="input input-bordered input-sm w-full max-w-xs "
              />

              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                onChange={handleChange}
                placeholder="Enter your Password"
                name="password"
                className="input input-bordered input-sm  w-full max-w-xs"
              />

              <label className="label">
                <span className="label-text">Confirm Password:</span>
              </label>
              <div className="flex flex-col">
                <input
                  type="password"
                  onChange={handleChange}
                  name="confirm_password"
                  placeholder="Enter your Password"
                  className="input input-bordered input-sm  w-full max-w-xs"
                />
                {userInfo?.password !== userInfo?.confirm_password &&
                  userInfo?.confirm_password !== "" && (
                    <>
                      <div
                        className="tooltip tooltip-open tooltip-error tooltip-bottom "
                        data-tip=" Please write the same password !! "
                      ></div>
                    </>
                  )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    Choose your profile Picture:
                  </span>
                </label>
                <input
                  type="file"
                  onChange={handleChange}
                  name="image"
                  className="file-input file-input-sm file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            <div className="card-actions justify-end">
              {isPending ? (
                <button className="btn">Loading ...</button>
              ) : userInfo?.password !== userInfo?.confirm_password ? (
                <button disabled className="btn bg-gray-400">
                  Register
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn"
                  onClick={() => navigate("/HomePage")}
                >
                  Register
                </button>
                // HEREEEEEE
              )}

              <button onClick={() => navigate("/ ")} className="btn">
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
    </form>
  );
};

export default Register;
