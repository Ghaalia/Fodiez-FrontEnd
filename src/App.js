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
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Recipies from "./Pages/Recipes";
import AddButton from "./Components/AddButton";
import RecipeDetail from "./Components/RecipeDetail";
import RecipeModal from "./Components/RecipeModal";
import Category from "./Pages/Category";

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(checktoken());
    if (user) navigate("/homepage");
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      {user && <AddButton />}

      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/homePage" Component={HomePage} />
        <Route path="/category" Component={CategoryList} />
        <Route path="/profile" Component={Profile} />
        <Route path="/settings" Component={Settings} />
        <Route path="/recipe" Component={Recipies} />
        <Route path="/recipe/:RecipeId" Component={RecipeDetail} />
        <Route path="/recipe/create-recipe" Component={RecipeModal} />
        <Route path="/category" Component={Category} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
