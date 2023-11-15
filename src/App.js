import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Welcome from "./Pages/Welcome";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { checktoken } from "./api/auth";
import CategoryList from "./Components/CategoryList";

function App() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    setUser(checktoken());
    if (user) navigate("/homepage");
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user && <Navbar />}
      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/Register" Component={Register} />
        <Route path="/Login" Component={Login} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/category" Component={CategoryList} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
