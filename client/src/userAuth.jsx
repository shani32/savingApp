import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const UserAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

}

export default UserAuth;
