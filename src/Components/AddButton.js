import React from "react";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed bottom-5 right-5 z-[1] flex border-round   justify-end items-end p-10 ">
        <div className="dropdown dropdown-top dropdown-end ">
          <label tabIndex={0} className="btn m-1 ">
            +
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                New Recipe
              </a>
              <dialog
                id="my_modal_3"
                className="modal h-[70%]   w-[50%] m-auto"
              >
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">New Recipe</h3>
              </dialog>
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
