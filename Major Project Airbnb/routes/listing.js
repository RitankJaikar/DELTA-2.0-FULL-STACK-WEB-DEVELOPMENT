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
  isLoggedIn("Log In to add new property!"),
  upload.single("listing[image]"),  // upload first
  validateListing,                  // then validate
  asyncWrap(listingController.createListing)
);

//new lisitng, this should be before /:id route
listingRouter.get(
  "/new",
  isLoggedIn("Log In to add new property!"),
  asyncWrap(listingController.renderNewForm)
);

listingRouter.get(
  "/owned",
  isLoggedIn("Log In to view your listed properties!"),
  asyncWrap(listingController.userindex)
);

listingRouter.route("/:id")
.get(asyncWrap(listingController.showlisting))
.put(
  isLoggedIn("Log In to edit a property!"),
  isOwner("You don't have permission to edit!"),
  upload.single("listing[image]"),
  validateListing,
  asyncWrap(listingController.editListing)
)
.delete(
  isLoggedIn("Log In to delete a property!"),
  isOwner("You don't have permission to delete!"),
  asyncWrap(listingController.deleteListing)
);

//edit route
listingRouter.get(
  "/:id/edit",
  isLoggedIn("Log In to edit a property!"),
  isOwner("You don't have permission to edit!"),
  asyncWrap(listingController.renderEditForm)
);

module.exports = listingRouter;