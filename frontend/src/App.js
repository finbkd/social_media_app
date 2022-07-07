import { useContext } from "react";
import { Routes, Route, Redirect } from "react-router-dom";

import "./App.css";
import { AuthContext } from "./components/Context/AuthContext";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} exact />
      <Route path="/profile/:username" element={user ? <Profile /> : <Register />} exact />
      <Route path="/login" element={user ? <Home /> : <Login />} exact />
      <Route path="/Register" element={user ? <Home /> : <Register />} exact />
    </Routes>
  );
}

export default App;
