const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust';

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
})

// app.get("/testListing", async (req, res) => {
//     let sampleListing =  new Listing({
//         title: "My new villa",
//         description: "By the mountians",
//         price: 1200,
//         location: "Shimla",
//         country: "India"
//     })

//     console.log("Sample listing before saving:", sampleListing);
//     await sampleListing.save();
//     console.log("sample was saved:", sampleListing);
//     res.send("successful test");
// })


//index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
})

//new lisitng, this should be before /:id route
app.get("/listings/new", async (req, res) => {
    res.render("./listings/new.ejs");
})

//show route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    // console.log(id);
    const listing = await Listing.findById(id);
    // console.log(listing);
    res.render("./listings/show.ejs", {listing});
})

//create route
app.post("/listings", async (req, res) => {
    // let {title, description, image, price, country, location} = req.body;
    const newListing = new Listing(req.body.listing);
    // console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
})

//edit route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    // console.log(listing);
    res.render("./listings/edit.ejs", {listing});
})

//update route
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
})

//delete route
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

app.listen(8080, () => {
    console.log("server is listning to port 8080");
})