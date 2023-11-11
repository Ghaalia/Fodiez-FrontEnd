import instance from ".";

const Login = async (userInfo) => {
  const res = await instance.post("/", userInfo);
  return res.data;
};

const Register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const res = await instance.post("/", formData);
  return res.data;
};
const getAllCategory = async () => {
  const res = await instance.get("/");
  return res.data;
};
const addCategory = async (name, image) => {
  const res = await instance.post("/", {
    name,
    image,
  });
  return res.data;
};

export { Login, Register, getAllCategory, addCategory };
