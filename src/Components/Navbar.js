import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profilePic from "../media/ProfilePic.jpeg";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handelLogout = () => {
    logout(setUser);
    navigate("/");
  };

  return (
    <div className="navbar bg-base-300 shadow-lg shadow-gray-500  flex ">
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-start">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profilePic} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={handelLogout}
                className=" hover:text-red-600"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="flex-1 justify-end">
        <a
          onClick={() => navigate("/HomePage")}
          className="btn btn-ghost normal-case text-xl font-serif"
        >
          Foodiez
        </a>
      </div>
    </div>
  );
};

export default Navbar;
