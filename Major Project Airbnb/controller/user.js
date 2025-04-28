const User = require("../models/user");

const renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = new User({email, username});
        const regUser = await User.register(newUser, password);
        req.login(regUser, (err) => {
            if(err) {
                return  next(err);
            }
            req.flash("success", `Hi ${username}, Welcome to Wanderlust`);
            res.redirect("/listings");
        })
    }
    catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

const renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

const login = async (req, res) => {
    const {username} = req.body;
    req.flash("success", `Hi ${username}, Welcome back to Wanderlust`);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

const logout = (req, res) => {
    req.logout((err) => {
        if(err) {
            return (err);
        }
        req.flash("success", "Logged you out!");
        res.redirect("/listings");
    })
}

module.exports = { renderSignupForm, signup, renderLoginForm, login, logout }