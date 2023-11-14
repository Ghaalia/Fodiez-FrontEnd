import React from "react";
import ProfilePic from "../media/ProfilePic.jpeg";

const Profile = () => {
  return (
    <div className=" relative flex h-screen align-middle items-center">
      <div className="card justify-center items-center w-96  shadow-xl shadow-gray-400 bg-neutral mx-5">
        <img className="rounded-full " src={ProfilePic} alt="Profile Picture" />

        <div className="card-body border ">
          <div className="border">
            <h2 className="text-sm">First Name</h2>
            <h2 className="card-title">@UserName</h2>
          </div>

          <div className="flex justify-center gap-5">
            <div className="border flex flex-col justify-center">
              <h1 className="">20</h1>
              <h1 className="badge badge-outline">Following</h1>
            </div>

            <div className="border flex flex-col justify-center ">
              <h1 className="">15</h1>
              <h1 className="badge badge-outline">Followers</h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col  justify-center items-center align-center border border-black w-[90%] gap-10">
        <div className="flex shadow-lg shadow-gray-300 w-full rounded-box justify-evenly align-middle items-center">
          <button className="w-[30%] h-10 btn rounded-box place-items-center hover:underline decoration-2 decoration-neutral underline-offset-8">
            Recipes
          </button>

          <button className="w-[30%] h-10 btn rounded-box place-items-center hover:underline decoration-2 decoration-neutral underline-offset-8">
            Favorite
          </button>
        </div>

        <div>Hello, Here will be all recipeis</div>
      </div>
    </div>
  );
};

export default Profile;
