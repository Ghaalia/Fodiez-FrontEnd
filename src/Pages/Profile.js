import React from "react";
import ProfilePic from "../media/ProfilePic.jpeg";
import CategoryList from "../Components/CategoryList";

const Profile = () => {
  const showRecipes = () => {
    <div> Here will be all recipeis</div>;
  };

  const showFavorites = () => {
    <div>Here will be all Favorites</div>;
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex w-[95%] h-screen justify-end align-middle items-top py-5 ">
        <div className="fixed top-[200px] left-10 card justify-center items-center w-[35%]  shadow-xl shadow-gray-400 bg-neutral  py-[20px]">
          <img
            className="rounded-full min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] shadow-xl shadow-gray-500 object-cover"
            src={ProfilePic}
            alt="Profile Picture"
          />

          <div className="card-body ">
            <h2 className="text-sm">First Name</h2>
            <h2 className="card-title">@UserName</h2>

            <div className="flex justify-center gap-5">
              <div className="flex flex-col justify-center items-center">
                <button className=" hover:text-primary">20</button>
                <button className="hover:bg-primary badge badge-outline">
                  Following
                </button>
              </div>

              <div className="flex flex-col justify-center items-center ">
                <button className=" hover:text-primary">15</button>
                <button className=" hover:bg-primary badge badge-outline">
                  Followers
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center align-top border border-black w-[60%] gap-10">
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

          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
