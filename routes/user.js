const usersRouter = require("express").Router();
const  services = require('../services/render')

const { validateUserRegistration } = require("../middlewares/validation");
const userController = require("../controllers/user");
const passport = require("passport");

module.exports = usersRouter;

//render
usersRouter.get("/login", services.login);
usersRouter.get("/register", services.register);
usersRouter.get("/logout",services.logout);

usersRouter.post("/register",
  validateUserRegistration,
  userController.createUser
);


usersRouter.post(
  "/login",
  passport.authenticate('local',{
    successRedirect:'/patients',
    failureRedirect:'/login',
    failureFlash: true
  })
);


