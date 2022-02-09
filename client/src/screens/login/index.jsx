import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.styles.css";

const INPUT_ATTR = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: "login-input-field",
    id: "login-email-input",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "login-input-field",
    id: "login-password-input",
  },
];

const Input = ({ ...attr }) => {
  return <input {...attr} />;
};

const INITIAL_STATE = {
  email: "",
  password: "",
};

const inputReducer = (state, action) => {
  switch (action.name) {
    case "email":
      return { ...state, [action.name]: action.payload };
    case "password":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [inputsVal, dispatch] = useReducer(inputReducer, INITIAL_STATE);
  const tokenFromLocalStorage = localStorage.getItem("token");
  const tokenRef = useRef(tokenFromLocalStorage);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!tokenRef.current) navigate("/login");
  }, []);

  const handleInput = ({ target: { value, name } }) =>
    dispatch({ name, payload: value });

  const onSubmit = async (event) => {
    const newUser = inputsVal;
    event.preventDefault();
    const { data: user } = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      newUser
    );
    if (!user) return alert("inValid")
    const [isLogin, details, token] = user;
    localStorage.setItem("isLogin", isLogin);
    localStorage.setItem("userDetails", JSON.stringify(details));
    localStorage.setItem("token", token);
    if (token && location.pathname === "/login") navigate("/mySpace");
  };

  return (
    <div className="login-container">
      <header className="login-header-container">
        <h1 className="login-header-content">Login Page</h1>
      </header>
      <form onSubmit={onSubmit} className="login-form">
        <div className="login-paper">
          {INPUT_ATTR.map((attr) => (
            <Input key={attr.id} {...attr} onChange={handleInput} />
          ))}
        </div>
        <div className="login-submit-button-container">
          <button type={"submit"} className="login-submit-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
