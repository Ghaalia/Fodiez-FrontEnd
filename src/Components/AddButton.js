import React from "react";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex  h-screen border-round   justify-end items-end p-10">
        <div className="dropdown dropdown-top dropdown-end ">
          <label tabIndex={0} className="btn m-1 ">
            +
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a>New Recipe</a>
            </li>
            <li>
              <a>New Category</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddButton;
