import React from "react";

const CreateRecipie = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold underline underline-offset-2 decoration-blue-300">
              New Recipe?
            </h1>

            <p className="py-4 px-5 text-lg w-[300px] font-semibold ">
              I'm all ears for another recipe idea. Share it with us, and let's
              get cooking!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Recipe Name"
                  className="input input-bordered input-sm  max-w-xs"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe Picture</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cooking Time</span>
                </label>
                <div className="join">
                  <div>
                    <div>
                      <input
                        type="number"
                        className="input input-sm input-bordered join-item"
                        placeholder="Cooking Time"
                      />
                    </div>
                  </div>
                  <select className="select select-sm select-bordered join-item ">
                    <option disabled selected>
                      Time in
                    </option>
                    <option>Minutes</option>
                    <option>Hours</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ingredients</span>
                </label>
                <div className="join">
                  <div>
                    <div>
                      <input
                        disabled
                        className="input input-sm input-bordered join-item"
                        placeholder="Ingredients"
                      />
                    </div>
                  </div>

                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm ">
                      Add
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Onion</a>
                      </li>
                      <li>
                        <a>Tomato</a>
                      </li>
                      <li>
                        <a> + Create new Ingredient</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">How to make the recipe?</span>
                </label>
                <textarea
                  className="textarea textarea-primary"
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="flex justify-evenly py-5 ">
                <button className="w-[150px] btn btn-primary">
                  Create Recipe
                </button>
                <button className="w-[150px]  btn btn-primary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipie;
