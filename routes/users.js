const auth = require("../middlewares/auth");
const validateLogin = require("../middlewares/validateLogin");
const express =require('express');
const userRouter=express.Router();

const {
    addUser,
    getAllUsers,
    updateUser,
    login,
    getlUser,
    logout,
    logoutAll,
  } = require("../utilities/utils");
  
userRouter.post("/add", addUser);

userRouter.post("/login", validateLogin, login);

userRouter.post("/logout", auth, logout);

userRouter.post("/logoutAll", auth, logoutAll);

userRouter.get("", auth, getAllUsers);

userRouter.get("/self/:email", auth, getlUser);

userRouter.put("/update/:email", auth, updateUser);

module.exports=userRouter