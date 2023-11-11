import instance from ".";

const getAllIngredient = async () => {
  const res = await instance.get(`/Ingredients`);
  return res.data;
};

const getOneIngredient = async (id) => {
  const res = await instance.get(`/Ingredients/${id}`);
  return res.data;
};

const createIngredient = async (name, image) => {
  const res = await instance.post(`/Ingredients`, {
    name,
    image,
  });
  return res.data;
};

const addIngredientToRecipe = async (IngredientId, RecipeId) => {
  const res = await instance.delete(`/Ingredients/${IngredientId}/${RecipeId}`);
  return res.data;
};

export {
  getAllIngredient,
  getOneIngredient,
  createIngredient,
  addIngredientToRecipe,
};
