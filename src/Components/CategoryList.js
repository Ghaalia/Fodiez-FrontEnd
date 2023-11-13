import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllCategory } from "../api/category";
import Navbar from "./Navbar";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
import kuw from "../media/OIP.jpeg";
import Indian from "../media/Indian-food-specialties.jpg";

const CategoryList = () => {
  const [query, setQuery] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategory(),
  });

  const Category_List = categories
    ?.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);
  return (
    <>
      <div className=" flex border border-black h-screen align-middle  justify-evenly items-center ">
        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl ">
          <figure>
            <img className="h-50" src={kuw} alt="picture" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kuwaiti Food</h2>
            <div className="card-actions justify-center ">
              <Link to={"/"}>
                <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                  View more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-40 h-70 bg-base-100 shadow-xl ">
          <figure>
            <img className="h-50" src={Indian} alt="inidan" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Indian Food</h2>
            <div className="card-actions justify-center ">
              <Link to={"/"}>
                <button className="btn flex justify-center w-[100px] text-xs btn-primary ">
                  View more
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {Category_List}
        </div> */}
      </div>
    </>
  );
};

export default CategoryList;
