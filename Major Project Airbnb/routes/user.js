const passport = require("passport");
const asyncWrap = require("../utils/asyncWrap");
const { saveRedirectUrl } = require("../middleware");
const express = require("express");
const useController = require("../controller/user");

const userRouter = express.Router();

userRouter.route("/signup")
.get(useController.renderSignupForm)
.post(asyncWrap(useController.signup));

userRouter.route("/login")
.get(useController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    asyncWrap(useController.login)
);

userRouter.get("/logout", useController.logout);

module.exports = userRouter;