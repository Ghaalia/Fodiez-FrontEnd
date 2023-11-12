import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Category from "./Category";
import { getAllCategory } from "../../api/auth";

const CategoryList = () => {
  const [query, setQuery] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategory(),
  });

  const CategoryList = categories
    ?.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <Categoryitem category={category} key={category.id} />);
  return <Category />;
};

export default CategoryList;
