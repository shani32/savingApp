import "./App.css";
import { useEffect, useState } from "react";
import Register from "./screens/register";

import { GlobalProvider } from "./Context/GlobalState";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AddTransactions from "./screens/addTransactions";
import HomePage from "./screens/homePage";
import MySpace from "./screens/mySpace";
import Login from "./screens/login/index";
import { useBackground } from "./Context/background.context";
import { NavBar } from "./NavBar";
import { LogOutContext } from "./Context/app.context";
import UserAuth from "./userAuth";

function App() {
  const background = useBackground();

  return (
    <BrowserRouter>
      <NavBar />
      <GlobalProvider>
        <div style={{ backgroundImage: `url(${background})` }} className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/mySpace" element={<MySpace />} />
            <Route path="/addTransactions" element={<AddTransactions />} />
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
