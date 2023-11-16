import instance from ".";
import { jwtDecode } from "jwt-decode";
// you imported it as default

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checktoken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    } else return true;
  }
  return false;
};

const login = async (userInfo) => {
  const res = await instance.post(`/User/signin`, userInfo);
  storeToken(res.data?.token);
  return res.data;
};

const logout = (setUser) => {
  setUser(false);
  localStorage.removeItem("token");
};

const register = async (userInfo) => {
  console.log(userInfo);
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const res = await instance.post(`/User/signup`, formData);
  storeToken(res.data?.token);
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

const getMyProfile = async () => {
  const res = await instance.get("/User/get-my-profile");
  return res.data;
};
export {
  login,
  register,
  getAllUsers,
  updateUser,
  checktoken,
  logout,
  storeToken,
  getMyProfile,
};
