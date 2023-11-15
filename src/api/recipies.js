import instance from ".";

const getAllRecipes = async () => {
  const res = await instance.get(`/recipe`);
  return res.data;
};

const getOneRecipe = async (id) => {
  const res = await instance.get(`/recipe/${id}`);
  return res.data;
};

const createNewRecipe = async (name, description, cookTime, image) => {
  const res = await instance.post(`/recipe`, {
    name,
    description,
    cookTime,
    image,
  });
  return res.data;
};

const updateRecipe = async (id, name, description, cookTime, image) => {
  const res = await instance.put(`/recipe/${id}`, {
    name,
    description,
    cookTime,
    image,
  });
  return res.data;
};

const deleteRecipe = async (id) => {
  const res = await instance.delete(`/recipe/${id}`);
  return res.data;
};

export {
  deleteRecipe,
  updateRecipe,
  createNewRecipe,
  getOneRecipe,
  getAllRecipes,
};
