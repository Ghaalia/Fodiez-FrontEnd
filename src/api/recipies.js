import instance from ".";

exports.getAllRecipes = async () => {
  const res = await instance.get(`/recipe`);
  return res.data;
};

exports.getOneRecipe = async (id) => {
  const res = await instance.get(`/recipe/${id}`);
  return res.data;
};

exports.createNewRecipe = async (name, description, cookTime, image) => {
  const res = await instance.post(`/recipe`, {
    name,
    description,
    cookTime,
    image,
  });
  return res.data;
};

exports.updateRecipe = async (id, name, description, cookTime, image) => {
  const res = await instance.put(`/recipe/${id}`, {
    name,
    description,
    cookTime,
    image,
  });
  return res.data;
};

exports.deleteRecipe = async (id) => {
  const res = await instance.delete(`/recipe/${id}`);
  return res.data;
};
