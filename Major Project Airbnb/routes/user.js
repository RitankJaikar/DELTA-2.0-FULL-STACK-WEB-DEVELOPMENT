const passport = require("passport");
const asyncWrap = require("../utils/asyncWrap");
const {
  saveRedirectUrl,
  isLoggedOut,
  isLoggedIn,
  isInSignupFlow,
  validateUser,
} = require("../middleware");
const express = require("express");
const userController = require("../controller/user");

const userRouter = express.Router();

// Signup route (step 1: collect user info and send OTP)
userRouter
  .route("/signup")
  .get(
    isLoggedOut("You are already registered!"),
    userController.renderSignupForm
  )
  .post(isLoggedOut(), validateUser, asyncWrap(userController.signup));

// Email verification route (step 2: verify OTP and register user)
userRouter
  .route("/signup/verify-email")
  .get(isInSignupFlow, (req, res) => res.render("users/verify-email.ejs"))
  .post(isInSignupFlow, asyncWrap(userController.verifyOTPandRegister));

// Resends a new OTP to the user's email
userRouter.post(
  "/signup/resend-otp",
  isInSignupFlow,
  asyncWrap(userController.resendOTP)
);

// Login route (uses email and password)
userRouter
  .route("/login")
  .get(isLoggedOut(), userController.renderLoginForm)
  .post(
    isLoggedOut(),
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: "Password or email is incorrect",
    }),
    asyncWrap(userController.login)
  );

// Logout user and destroy session
userRouter.get(
  "/logout",
  isLoggedIn("You must be logged in to logout!"),
  userController.logout
);

// User Profile
userRouter.get(
  "/profile",
  isLoggedIn("You must be logged in to access user profile!"),
  userController.userProfile
);

module.exports = userRouter;