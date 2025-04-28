const Listing = require("../models/listing");
const mongoose = require("mongoose");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

const index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};

const renderNewForm = async (req, res) => {
    // console.log(req.user);
    res.render("listings/new.ejs");
};

const showlisting = async (req, res) => {
    let {id} = req.params;
    // Check for valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "Invalid listing ID.");
        return res.redirect("/listings");
    }
    const listing = await Listing.findById(id).populate("owner").populate({
        path: "reviews",
        populate: {
            path: "author", // this populates author inside each review
            // select: "username" // optional: fetch only username
        }
    });
    if(!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", {listing});
};

const createListing = async (req, res) => {
    // if(!req.body.listing) {  //better use asyncWrap for all
    //     throw new ExpressError(400, "Send valid data for listing");
    // }

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location + ", " + req.body.listing.country,
        limit: 1
    })
    .send();
    // console.log(response.body.features[0].geometry);

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    const { path, filename } = req.file;  // Get URL and filename
    newListing.image.url = path;
    newListing.image.filename = filename;
    newListing.geometry = response.body.features[0].geometry;

    const savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

const renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    let origImg = listing.image.url;
    origImg = origImg.replace("/upload", "/upload/w_500");  // decreasing img pexels using cloudinary api
    res.render("./listings/edit.ejs", {listing, origImg});
};

const editListing = async (req, res) => {
    let {id} = req.params;
    let editedListing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(req.file) {  // only edit if its updated
        const { path, filename } = req.file;
        editedListing.image.url = path;
        editedListing.image.filename = filename;
    }

    await editedListing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

const deleteListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports = { index, renderNewForm, showlisting, createListing, renderEditForm, editListing, deleteListing };