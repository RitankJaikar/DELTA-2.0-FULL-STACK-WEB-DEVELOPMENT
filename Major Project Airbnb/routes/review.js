// Reviews Route
const Review = require("../models/review");
const Listing = require("../models/listing");
const asyncWrap = require("../utils/asyncWrap");
const express = require("express");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controller/review");

const reviewRouter = express.Router({ mergeParams: true });

// middleware to set redirectUrl for review routes
const redirectUrl = (req, res, next) => {
  req.redirectUrl = `/listings/${req.params.id}`;
  next();
};

// Post route
reviewRouter.post(
  "/",
  redirectUrl,
  isLoggedIn("LogIn to add comment!"),
  validateReview,
  asyncWrap(reviewController.createReview)
);

// Delete route
reviewRouter.delete(
  "/:reviewId",
  redirectUrl,
  isLoggedIn("LogIn to delete comment!"),
  isReviewAuthor,
  asyncWrap(reviewController.deleteReview)
);

module.exports = reviewRouter;