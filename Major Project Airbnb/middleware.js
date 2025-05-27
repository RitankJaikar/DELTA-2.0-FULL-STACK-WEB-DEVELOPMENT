const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema, userSchema } = require("./schema");
const ExpressError = require("./utils/ExpressError");

const isLoggedIn = (message = "You must be logged in!") => {
    return (req, res, next) => {
        // console.log(req.method, req.originalUrl, "isLoggedIn isAuthenticated? ->", req.isAuthenticated());  // Debug line

        if (!req.isAuthenticated()) {
            if(req.redirectUrl) {
                req.session.redirectUrl = req.redirectUrl;
            }
            else {
                req.session.redirectUrl = req.originalUrl;
            }
            // console.log(message);
            req.flash("error", message);
            return res.redirect("/login");
        }
        next();
    };
};

const isLoggedOut = (message = "You are already logged in!") => {
    return (req, res, next) => {
        // console.log(req.method, req.originalUrl, "isLoggedOut isAuthenticated? ->", req.isAuthenticated());  // Debug line
            
        if (req.isAuthenticated()) {
            // console.log(message);
            req.flash("error", message);
            return res.redirect("/listings"); // or redirect to dashboard
        }
        next();
    };
};

const saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

const validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if(result.error) {
        // throw new ExpressError(400, result.error);
        // or
        let errMsg = result.error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

const validateReview = (req, res, next) => {
    let result = reviewSchema.validate(req.body);
    if(result.error) {
        let errMsg = result.error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

const validateUser = (req, res, next) => {
    let result = userSchema.validate(req.body);
    if(result.error) {
        let errMsg = result.error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

const isOwner = (message = "You don't have permission!") => {
    return async (req, res, next) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if(!listing.owner._id.equals(req.user._id)) {
            req.flash("error", message);
            return res.redirect(`/listings/${id}`);
        }
        next();
    }
};

const isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author._id.equals(req.user._id)) {
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

const isInSignupFlow = (req, res, next) => {
    // If user is already logged in, block them
    if (req.isAuthenticated()) {
        req.flash("error", "You are already logged in.");
        return res.redirect("/listings");
    }

    // If session doesn't have signup info, block access
    if (!req.session.tempUser) {
        req.flash("error", "Access denied. Please sign up first.");
        return res.redirect("/signup");
    }

    next();
};

module.exports = {isLoggedIn, isLoggedOut, saveRedirectUrl, validateListing, validateReview, validateUser, isOwner, isReviewAuthor, isInSignupFlow};