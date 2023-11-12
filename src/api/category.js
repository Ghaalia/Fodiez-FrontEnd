import instance from ".";

const getAllCategory = async () => {
  const res = await instance.get(`/Categories`);
  return res.data;
};

const getOneCategory = async (CategoryId) => {
  const res = await instance.get(`/Categories/${CategoryId}`);
  return res.data;
};

const createNewCategory = async (name, image) => {
  const res = await instance.post(`/Categories`, {
    name,
    image,
  });
  return res.data;
};

const deleteCategory = async (CategoryId) => {
  const res = await instance.delete(`/Categories/${CategoryId}`);
  return res.data;
};

export { getAllCategory, getOneCategory, createNewCategory, deleteCategory };
