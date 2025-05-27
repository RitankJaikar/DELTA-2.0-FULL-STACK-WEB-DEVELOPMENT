const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError");
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const expressSession = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const userRouter = require("./routes/user");
const connectMongo = require("connect-mongo");
const categories = require("./utils/categories");

// Connect to DB
require("./config/db");


// Middwares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.set('trust proxy', 1);
app.use(
    expressSession({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            //default name: "connect.sid"
            // expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            maxAge: 1000*60*60*24*7,    // 7 days
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // only secure in production
            sameSite: 'lax', // or 'none' (depending on your frontend/backend connection)
        },
        store: connectMongo.create({
            // collectionName: "sessions"  //default
            mongoUrl: process.env.MONGODB_URI2,
            crypto: {
                secret: process.env.SESSION_SECRET,
            },
            touchAfter: 24 * 3600
        })
    })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));   // Passport will treat the email field from the login form as the "username"
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user; //for validating options in Navbar.ejs
    res.locals.categories = categories
    next();
});


// Matched route for debugging
// app.use((req, res, next) => {
//     console.log("Matched route:", req.method, req.originalUrl);
//     next();
// });

// Routes
app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Unmatched route for debugging
// app.use((req, res, next) => {
//     console.log("Unmatched route:", req.method, req.originalUrl);
//     next();
// });


// Page not Found route
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not Found!"));
});

// Error middleware
app.use((err, req, res, next) => {
    let {statusCode=500, message="Something Went Wrong"} = err;
    res.status(statusCode).render("error.ejs", {message});
});

// For dev
app.listen(8080, () => {
    console.log("server is listning to port 8080");
});

// For prod
module.exports = app;