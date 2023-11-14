import React from "react";
import ProfilePic from "../media/ProfilePic.jpeg";

const Profile = () => {
  const showRecipes = () => {
    <div> Here will be all recipeis</div>;
  };

  const showFavorites = () => {
    <div>Here will be all Favorites</div>;
  };

  return (
    <div className="flex w-[95%] h-screen justify-between align-middle items-center">
      <div className="card justify-center items-center w-96  shadow-xl shadow-gray-400 bg-neutral ">
        <img
          className=" rounded-full shadow-xl shadow-gray-500"
          src={ProfilePic}
          alt="Profile Picture"
        />

        <div className="card-body border ">
          <div className="border">
            <h2 className="text-sm">First Name</h2>
            <h2 className="card-title">@UserName</h2>
          </div>

          <div className="flex justify-center gap-5">
            <div className="border flex flex-col justify-center items-center">
              <button className=" hover:text-primary">20</button>
              <button className="hover:bg-primary badge badge-outline">
                Following
              </button>
            </div>

            <div className="border flex flex-col justify-center items-center ">
              <button className=" hover:text-primary">15</button>
              <button className=" hover:bg-primary badge badge-outline">
                Followers
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col  justify-center items-center align-center border border-black w-[90%] gap-10">
        <div className="flex shadow-lg shadow-gray-300 w-full rounded-box justify-evenly align-middle items-center">
          <button
            onClick={showRecipes()}
            className="w-[30%] h-10 btn rounded-box place-items-center hover:underline decoration-2 decoration-neutral underline-offset-8"
          >
            Recipes
          </button>

          <button
            onClick={showFavorites()}
            className="w-[30%] h-10 btn rounded-box place-items-center hover:underline decoration-2 decoration-neutral underline-offset-8"
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
