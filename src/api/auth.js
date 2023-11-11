import instance from ".";

const Login = async (userInfo) => {
  const res = await instance.post(`/User/signin`, userInfo);
  return res.data;
};

const Register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const res = await instance.post(`/User`, formData);
  return res.data;
};

const getAllUsers = async () => {
  const res = await instance.get(`/User`);
  return res.data;
};

const updateUser = async (userId, username, password, email) => {
  const res = await instance.put(`/User/${userId}`, {
    username,
    password,
    email,
  });
  return res.data;
};

export { Login, Register, getAllUsers, updateUser };
