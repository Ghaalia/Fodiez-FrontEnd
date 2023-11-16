import React from "react";

const CreateCategory = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold underline underline-offset-2  decoration-blue-300">
              New Category?
            </h1>

            <p className="py-4 px-5 text-lg w-[300px] font-semibold ">
              When it comes to food, we love exploring different cuisines and
              trying new flavors. It's always exciting to discover unique dishes
              from around the world!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Category Name"
                  className="input input-bordered input-sm  max-w-xs input-blue-300"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Picture</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-blue-300 file-input-bordered file-input-sm  w-full max-w-xs"
                />
              </div>

              <div className="form-control">
                <label className="cursor-pointer label">
                  <div className="flex justify-evenly align-middle items-center gap-4">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox checkbox-neutral"
                    />
                    <span className="label-text text-sm">
                      Want to add a recipe to this category?
                    </span>
                  </div>
                </label>
              </div>
            </form>
            <div className="flex justify-evenly py-5 ">
              <button className="w-[150px] btn btn-neutral">
                Create Category
              </button>
              <button className="w-[150px]  btn btn-neutral">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
