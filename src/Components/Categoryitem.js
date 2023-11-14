import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryItem = (category) => {
  const navigate = useNavigate();
  return (
    <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl ">
      <figure>
        <img
          className="h-50"
          src={category.image}
          alt={`${category.name}-image`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.name}</h2>
        <div className="card-actions justify-center ">
          <Link to={"/"}>
            <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
