import React, { useReducer } from "react";
import "./register.styles.css";

const INPUT_ATTR = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: "register-input-field",
    id: "register-email-input",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "register-input-field",
    id: "register-password-input",
  },
  {
    name: "userName",
    type: "text",
    placeholder: "User Name",
    className: "register-input-field",
    id: "register-password-input",
  },
];

const Input = ({ ...attr }) => {
  return <input {...attr} />;
};

const INITIAL_STATE = {
  email: "",
  password: "",
  userName: "",
};

const inputReducer = (state, action) => {
  switch (action.name) {
    case "email":
      return { ...state, [action.name]: action.payload };
    case "password":
      return { ...state, [action.name]: action.payload };
    case "userName":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};

const Register = () => {
  const [inputsVal, dispatch] = useReducer(inputReducer, INITIAL_STATE);

  const handleInput = ({ target: { value, name } }) =>
    dispatch({ name, payload: value });
  return (
    <div className="register-container">
      <header className="register-header-container">
        <h1 className="register-header-content">Register Page</h1>
      </header>
      <form className="register-form">
        <div className="register-paper">
          {INPUT_ATTR.map((attr) => (
            <Input key={attr.id} {...attr} onChange={handleInput} />
          ))}
        </div>
        <div className="register-submit-button-container">
          <button className="register-submit-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
