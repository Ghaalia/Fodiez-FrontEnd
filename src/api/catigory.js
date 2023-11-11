import instance from ".";

const getAllCategory = async () => {
  const res = await instance.get(`/Categories`);
  return res.data;
};

const getOneCategory = async (id) => {
  const res = await instance.get(`/Categories/${id}`);
  return res.data;
};

const createNewCategory = async (name, image) => {
  const res = await instance.post(`/Categories`, {
    name,
    image,
  });
  return res.data;
};

const deleteCategory = async (id) => {
  const res = await instance.delete(`/Categories/${id}`);
  return res.data;
};

export { getAllCategory, getOneCategory, createNewCategory, deleteCategory };
