import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Welcome from "./Pages/Welcome";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Welcome} />
      <Route path="/Register" Component={Register} />
      <Route path="/Login" Component={Login} />
      <Route path="/HomePage" Component={HomePage} />
    </Routes>
  );
}

export default App;
