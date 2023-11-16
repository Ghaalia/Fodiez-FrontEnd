import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BASEURL } from "../api";
import RecipeList from "./RecipeList";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();

  return (
    <Link to={`/Recipe/recipes/${category._id}`}>
      <div className="flex justify-start items-center align-middle rounded-2xl hover:text-neutral ">
        <div className="card card-compact  w-40  h-70 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-50 w-50"
              src={`${BASEURL}${category?.image}`}
              alt={"category"}
            />
          </figure>

          <div className="card-body justify-center items-center align-middle">
            <h2 className="card-title">{category.name}</h2>
            <div className="card-actions justify-center ">
              <button
                className="btn flex justify-center w-[100px] text-xs btn-primary "
                onClick={() => {
                  navigate("/recipe");
                }}
              >
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
