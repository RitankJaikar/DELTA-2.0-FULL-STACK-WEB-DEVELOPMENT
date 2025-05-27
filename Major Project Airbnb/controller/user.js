const getOtpEmailHtml = require("../getOtpEmailHtml");
const User = require("../models/user");
const nodemailer = require("nodemailer");

const renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// Set up Nodemailer to send OTP email (configure with your SMTP service)
const sendOTP = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: "Wanderlust",
        to: email,
        subject: 'Wanderlust: Email Verification OTP',
        html: getOtpEmailHtml(otp), // custom HTML
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        //   console.log('❌ Error:', error.message);
        } else {
        //   console.log('✅ Email sent:', info.response);
        }
    });
};

// Signup controller: handles initial user signup and sends OTP for email verification
const signup = async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        req.flash("error", "An account with this email already exists.");
        return res.redirect("/signup");
    }

    // OTP rate limiting logic (prevent spamming OTP requests)
    const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
    if (!req.session.otpRateLimit) {
        req.session.otpRateLimit = {};
    }
    const lastSentTime = req.session.otpRateLimit[email];
    if (lastSentTime && (Date.now() - lastSentTime < RATE_LIMIT_DURATION)) {
        req.flash("error", "Please wait a minute before requesting another OTP.");
        return res.redirect("/signup");
    }
    // Save timestamp
    req.session.otpRateLimit[email] = Date.now();

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // e.g., '458932'

    // Save details temporarily in session
    req.session.tempUser = { 
        username, 
        email, 
        password, 
        otp,
        expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutes in ms
    };

    // Send OTP
    await sendOTP(email, otp);

    // Notify user to check their email
    req.flash("success", `OTP sent to ${email}. Please verify your email.`);
    res.redirect("/signup/verify-email");
};

// Verifies the entered OTP and registers the user if valid
const verifyOTPandRegister = async (req, res) => {
    try {
        const { otp } = req.body; // This is now an array of OTP digits
        const otpString = otp.join(""); // Combine them into a single string, e.g., '123456'

        // Retrieve temporary user details from session
        const tempUser = req.session.tempUser;
        if (!tempUser) {
            req.flash("error", "Session expired. Please sign up again.");
            return res.redirect("/signup");
        }

        // Check if the OTP has expired
        if (Date.now() > tempUser.expiresAt) {
            delete req.session.tempUser;
            req.flash("error", "OTP expired. Please sign up again.");
            return res.redirect("/signup");
        }

        // Compare user-entered OTP with the one stored in session
        if (otpString === tempUser.otp) {
            // Register the user now
            const { email, username, password } = tempUser;
            const newUser = new User({ email, username, isEmailVerified: true });
            const registeredUser = await User.register(newUser, password);

            // Clean up
            delete req.session.tempUser;
            delete req.session.otpRateLimit[email];

            // Log in the user immediately after signup
            req.login(registeredUser, (err) => {
                if(err) {
                    return next(err);
                }
                req.flash("success", `Hi ${username}, Welcome to Wanderlust`);
                res.redirect("/listings");
            });
        } else {
            req.flash("error", "Invalid OTP.");
            res.redirect("/signup/verify-email");
        }
    }
    catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

// Resends a new OTP to the user's email with rate limiting
const resendOTP = async (req, res) => {
    const tempUser = req.session.tempUser;

    if (!tempUser) {
        req.flash("error", "Session expired. Please sign up again.");
        return res.redirect("/signup");
    }

    const email = tempUser.email;

    // Rate limit here as well (reuse above logic)
    const RATE_LIMIT_DURATION = 60 * 1000;  // 1 min

    if (!req.session.otpRateLimit) {
      req.session.otpRateLimit = {};
    }

    const lastSentTime = req.session.otpRateLimit[email];
    if (lastSentTime && (Date.now() - lastSentTime < RATE_LIMIT_DURATION)) {
      req.flash("error", "Please wait before requesting another OTP.");
      return res.redirect("/signup/verify-email");
    }

    // Generate and update new OTP and expiration time
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    req.session.tempUser.otp = newOTP;
    req.session.tempUser.expiresAt = Date.now() + 10 * 60 * 1000;

    // Update timestamp for rate limit
    req.session.otpRateLimit[email] = Date.now();

    await sendOTP(email, newOTP);
    req.flash("success", `New OTP sent to ${email}`);
    res.redirect("/signup/verify-email");
};

const renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

const login = async (req, res) => {
    req.flash("success", `Hi ${req.user.username}, Welcome back to Wanderlust`);
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

const userProfile = (req, res) => {
    const user = req.user;
    res.render("users/user.ejs", { user });
}

module.exports = { renderSignupForm, signup, verifyOTPandRegister, resendOTP, renderLoginForm, login, logout, userProfile  };