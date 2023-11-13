import "./App.css";
import { Route, Routes } from "react-router-dom";
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

  useEffect(() => {
    setUser(checktoken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className=" bg-">
        {user && <Navbar />}

        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/Register" Component={Register} />
          <Route path="/Login" Component={Login} />
          <Route path="/HomePage" Component={HomePage} />
          <Route path="/category" Component={CategoryList} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
