// Listings Routes
const asyncWrap = require("../utils/asyncWrap");
const { isLoggedIn, validateListing, isOwner } = require("../middleware");
const listingController = require("../controller/listing");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });
const express = require("express");

const listingRouter = express.Router();

listingRouter.route("/")
.get(asyncWrap(listingController.index))
.post(
  isLoggedIn("LogIn to add new listing!"),
  upload.single("listing[image]"),  // upload first
  validateListing,                  // then validate
  asyncWrap(listingController.createListing)
);

//new lisitng, this should be before /:id route
listingRouter.get(
  "/new",
  isLoggedIn("LogIn to add new listing!"),
  asyncWrap(listingController.renderNewForm)
);

listingRouter.route("/:id")
.get(asyncWrap(listingController.showlisting))
.put(
  isLoggedIn("LogIn to edit a listing!"),
  isOwner("You don't have permission to edit!"),
  upload.single("listing[image]"),
  validateListing,
  asyncWrap(listingController.editListing)
)
.delete(
  isLoggedIn("LogIn to delete a listing!"),
  isOwner("You don't have permission to delete!"),
  asyncWrap(listingController.deleteListing)
);

//edit route
listingRouter.get(
  "/:id/edit",
  isLoggedIn("LogIn to edit a listing!"),
  isOwner("You don't have permission to edit!"),
  asyncWrap(listingController.renderEditForm)
);

module.exports = listingRouter;