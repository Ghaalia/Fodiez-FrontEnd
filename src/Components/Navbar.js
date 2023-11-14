import React, { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import profilePic from "../media/ProfilePic.jpeg";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavFrom = ["/", "/register", "/login"];

  const handelLogout = () => {
    logout(setUser);
    navigate("/");
  };

  if (hideNavFrom.some((path) => path == location.pathname)) {
    return null;
  }

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
              <a
                onClick={() => navigate("/Profile")}
                className="justify-between"
              >
                Profile
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/Settings")}>Settings</a>
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
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
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
