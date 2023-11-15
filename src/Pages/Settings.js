import React from "react";
import ProfilePic from "../media/ProfilePic.jpeg";

const Settings = () => {
  const UpdateProfile = () => {};

  const ShowToast = () => {
    <div className="toast toast-start toast-middle">
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
    </div>;
  };
  return (
    <div className="flex h-screen justify-center align-middle items-center">
      <div className=" relative card flex flex-col gap-5 justify-center items-center w-[50%] shadow-xl shadow-gray-400 bg-accent  py-[20px]">
        <button
          type="button"
          id="Edit-button"
          className="absolute top-5 right-5 btn btn-active btn-ghost hover:bg-neutral btn-sm"
        >
          Edit Profile
        </button>

        <img
          className="rounded-full min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] shadow-xl shadow-gray-500"
          src={ProfilePic}
          alt="Profile Picture"
        />

        <div className=" flex flex-col gap-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">First Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">UserName: </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your  UserName"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password: </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Password"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text"> Confirm Password: </span>
            </label>
            <input
              type="text"
              placeholder="Confirm Your Password"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex justify-evenly items-center align-middle gap-5">
          <button
            onClick={ShowToast()}
            type="button"
            id="Update-button"
            className=" btn btn-active btn-ghost hover:bg-neutral btn-sm"
          >
            Update
          </button>

          <button
            type="button"
            id="Cancel-button"
            className=" btn btn-active btn-ghost hover:bg-neutral btn-sm"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="toast toast-start">
        <div className="alert alert-success bg-primary shadow-md shadow-gray-400">
          <span>Your Profile Updated successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
