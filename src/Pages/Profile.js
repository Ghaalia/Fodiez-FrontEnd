import React from "react";

const Profile = () => {
  return (
    <div className="flex  h-screen align-middle items-center">
      <div className="card w-96 h-[50%] shadow-xl shadow-gray-400 bg-neutral mx-5">
        <figure>
          <img src="." alt="Profile Picture" />
        </figure>

        <div className="card-body">
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
    </div>
  );
};

export default Profile;
