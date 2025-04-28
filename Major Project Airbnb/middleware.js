const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema");
const ExpressError = require("./utils/ExpressError");

const isLoggedIn = (message = "You must be logged in!") => {
    return (req, res, next) => {
        if (!req.isAuthenticated()) {
            if(req.redirectUrl) {
                req.session.redirectUrl = req.redirectUrl;
            }
            else {
                req.session.redirectUrl = req.originalUrl;
            }
            req.flash("error", message);
            return res.redirect("/login");
        }
        next();
    };
};

const saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

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
}

const validateReview = (req, res, next) => {
    let result = reviewSchema.validate(req.body);
    if(result.error) {
        let errMsg = result.error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}

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
}

const isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author._id.equals(req.user._id)) {
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports = {isLoggedIn, saveRedirectUrl, validateListing, validateReview, isOwner, isReviewAuthor};