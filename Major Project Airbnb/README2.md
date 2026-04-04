# 🏡 Wanderlust

Link - https://explore-wanderlust.vercel.app/listings

This is a full-stack **Wanderlust** built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine. The application allows users to browse property listings, view detailed pages for each property, and manage the data in a structured and scalable way.

## 📐 MVC Architecture

The application follows the **MVC (Model-View-Controller)** design pattern:

### 📦 Model (Database - MongoDB)
- Defines the **data structure** and **schema** for properties/listings.
- Handles interaction with the MongoDB database.
- Example: `Listing` model with fields like `title`, `price`, `description`, `location`, etc.

### 🎨 View (Frontend - EJS Templates)
- Responsible for displaying data to users.
- Uses **EJS templates** for rendering dynamic HTML pages.
- Pages include home, listings, listing details, and forms.

### 🛠️ Controller (Backend - Express Routes/Logic)
- Contains the **business logic**.
- Handles requests, manipulates data via models, and sends responses.
- Example: Fetching all listings, creating a new listing, editing, deleting, etc.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Templating Engine**: EJS
- **Styling**: CSS, Bootstrap
- **Version Control**: Git & GitHub

---

## 📁 File Structure

```
airbnb-clone/
│
├── init/                     # Scripts to initialize database
│   ├── data.js               # Sample Data for Listing
│   └── index.js              # Push sample data for listing to MongoDB
|
├── config/                   # Conection with DB
│   └── db.js
│
├── models/                   # Mongoose schemas
│   └── listing.js
│   └── review.js
│   └── user.js
|
├── routes/                   # All routes
│   └── listing.js
│   └── review.js
│   └── user.js
|
├── controller/               # All controllers
│   └── listing.js
│   └── review.js
│   └── user.js
│
├── views/
│   └── listings/             # EJS views for listing-related pages
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
│   └── includes/
│       ├── footer.ejs
│       └── navbar.ejs
│       └── flash.ejs
│   └── layouts/
│       └── boilerplate.ejs
│   └── error.ejs
│   └── user/
│       ├── login.ejs
│       └── signup.ejs
|
├── public/                   # style and script pages
│   └── css/             
│       └── style.css
│   └── js/             
│       └── script.css
│
├── utils/                   # utility functions/Classes
│   └── asyncWrap.js
│   └── ExpressError.js
|
├── node_modules/             # Project dependencies
│
├── app.js                    # Main entry point of the application
├── schema.js                 # For schema validation using Joi
├── middware.js               # All middlware in one place
├── cloudConfig.js            # Cloudinary Config
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact dependency tree
├── .env                      # Secure Enviroment variables
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### ✅ Step 1: Initialize Backend

Set up a new Node.js project and install the core dependencies:

- **express**: Web framework to handle routes and server logic  
- **mongoose**: ODM to interact with MongoDB  
- **ejs**: Templating engine to render dynamic HTML  

This forms the foundation of your backend environment.

### ✅ Step 2: Define Mongoose Model

Inside the `models/` directory, create a schema for listings using Mongoose.

Each listing represents a property (e.g., apartment, flat, house, villa, etc.) with the following fields:

- **title**: Required string field  
- **description**: Optional text  
- **image**: A string URL with a default fallback image  
- **price**: Number indicating cost  
- **location**: City or address  
- **country**: Country name  

This model will be used to store and retrieve listing data from MongoDB.

### ✅ Step 3: Setup Database Initialization

Inside the `init/` folder:

- **data.js**: Contains sample listings data to populate the database  
- **index.js**: Establishes the connection to MongoDB and loads sample data using Mongoose  

This step helps in setting up your development environment with sample records for testing.

### ✅ Step 4: Define Routes

The main routes for managing listings are structured as follows:

- **Index Route**  
  `GET /listings`  
  Displays a list of all available listings.

- **New Listing Route**  
  `GET /listings/new`  
  Renders a form to create a new listing.  
  ⚠️ *Important: This route should be defined before any route with `:id` to avoid route conflicts.*

- **Show Route**  
  `GET /listings/:id`  
  Displays detailed information for a specific listing by its ID.

- **Create Route**  
  `POST /listings`  
  Handles form submission and adds a new listing to the database.

- **Edit Route**  
  `GET /listings/:id/edit`  
  Renders a form pre-filled with the existing listing data to edit.

- **Update Route**  
  `PUT /listings/:id`  
  Processes the form and updates the listing in the database.

- **Delete Route**  
  `DELETE /listings/:id`  
  Deletes a listing from the database.

These routes follow RESTful conventions and handle CRUD operations for listings.

### ✅ Step 5: EJS Mate

Used ejs-mate for boilerplate code like head, cdns, etc. which mostly same in all pages.
/views/layouts/boilerplate.ejs

Now add Navbar and Footer in boiler plate using include.
Navbar -> Using bootstrap's navbar
/views/includes/navbar.ejs
/views/includes/footer.ejs

### ✅ Step 6: Styling using bootstrap classes

/public/css/style.css
Styling listing page, new listing page, edit page, show page- using custom css and bootstrap classes.

### ✅ Step 7: Client Side Validation

Form validation of new listing using bootstrap's Validation.
need to add "novalidate" attribute in the <form> tag. And need to add script also.
/public/js/script.css
now add success and faliure text using "valid-feedback" and "invalid-feedback" classes.

### ✅ Step 8: Server Side Validation- Custom error handling

Create error handling middlewares.
Create asyncWrap function for better error handling and avoid bulky try/catch.
/utils/asyncWrap.js
Now wrap all async route with asyncWrap.
Create Error.ejs.
Now add Schema Validations using Joi (npm package), add middleware validateListing to all route where validation is required.

### ✅ Step 9: Reviews

Review Model -> Review Route -> Review Validations -> Review Render

### ✅ Step 10: express-session & connect-flash

Setting up cookie using express-session.
Using connect-flash to flash alerts like Listing Added, Listing Does not exist, etx.

### ✅ Step 11: User Model and Authentication using Passport

install - passport passport-local passport-local-mongoose
Create User model.
```js
userSchema.plugin(passportLocalMongoose); // -> Will automatically generate hashed + salted password. And will provide other functions, to authenticate user.

// To use passport we need to have express-session.
app.use(passport.initialize()); // -> Middleware that initializes passport.
app.use(passport.session()); // -> A web app needs the ability to identify users they browser from page to page. This series of the requests and responses, each associated with the same user, is known as session.
passport.use(new LocalStrategy(User.authenticate())); // -> To authenticate User via Local Strategy.
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser()); // -> means to store user related info into the session
passport.deserializeUser(User.deserializeUser()); // -> means to remove user related info into the session

app.get("/demouser", async(req, res) => { // signup
    let fakeUser = new User({
        email: "user@gmail.com",
        username: "user"  // will be defined by passport-local-mongoose
    });
    const regUser = await User.register(fakeUser, "password");  // this method we got from passport-local-mongoose
    // also checks username is unique or not
    res.send(regUser);
});
// User Created-
{"email":"user@gmail.com","_id":"680b2acddfcdfe56e974133e","username":"user","salt":"addedSalt","hash":"hashed password","__v":0}
// hashing algo = pbkdf2
// salt length default - 32
// hashing iterations default - 25000

// middleware to authenticate user (for login)
passport.authenticate("local", { failureRedirect: "/login", failureFlash: true})
```

Add functionality to check whether user is loggedin, if logged in then only they can access routes like listings/new.
```js
// use this to authenticate user
// console.log(req.user); //user will be undefined is not loggedin, otherwise user info will appear
// stored by passport 
if(!req.isAuthenticated()) {
  return res.redirect("/login");
}
```

Logout-  GET /logout
```js
req.logout((err) => {
    if(err) {
        return (err);
    }
    req.flash("success", "Logged you out!");
});
```
Direct login after signup-
```js
req.login(regUser, (err) => {
    if(err) {
        return  next(err);
    }
    res.redirect("/listings");
})
```

saveRedirectUrl middleware to remember where user came from, so we can redirect to same path them after login
```js
// isLoggedIn middleware
if (!req.isAuthenticated()) {
  // if not loggedin save req.originalUrl in req.session.redirectUrl
  req.session.redirectUrl = req.originalUrl;
  // we can not use this directly, since passport resets the session after login
}

const saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

// after login-
const redirectUrl = res.locals.redirectUrl || "/listings";
// res.locals.redirectUrl might be undefined in some cases
res.redirect(redirectUrl);
```

### ✅ Step 12: Authorization

Set owner of listing- POST /listing
```js
newListing.owner = req.user._id;
```

Authorization for lisitngs-
create isOwner middware to check if user is owner of perticular listing or not, to give permission to edit, delete, etc.

Authorization for reviews-
set author for review, Authorization to add review and to delete review.

### ✅ Step 13: MVC Framework

MVC- Model(database), View(frontend), Controller(backend)
Implement Design Pattern for Listings.

Create controllers for Listing, Reviews and User.

### ✅ Step 14: Router.route

Implement Router.route for more simplicity and readiblity.

### ✅ Step 15: Styling Review

use starability library for rating or add custom styling.

### ✅ Step 16: Image upload functionality

Problem with normal form, it can not send files to backend. And we can't save file in monogdb due to size limit. For now form can only send urlencoded data, that can be read by the the backend.
add this attribute to form, to make it capable to send fils.
eaenctype="multipart/form-data"
But backend will not understand this type of data. Hence we use npm multer.
And to upload image we use cloudinary, and save url to mongodb.
For future- Feature to add multiple images, carousel and limit file size for each image.

### ✅ Step 17: Map functionality

Using Mapbox.
SDK for Forwared and Reverse Geocoding-
https://github.com/mapbox/mapbox-sdk-js

Store coordinates in mongoDB as GeoJSON format. This format have special methods related to maps.

### ✅ Step 18: Deployment

Push on Github and Deploy On Vercel.

### ✅ Step 19: New user flow

🚫 User is not saved to the database until email verification is complete.

💾 Temporary user data + OTP is stored securely in the session.

⏰ OTP expires in 10 minutes — enforced via expiresAt timestamp in session.

✅ User is registered only after a valid OTP match.

🔐 Session checks + OTP logic prevent unauthorized access or tampering (e.g., expired session, reused/invalid OTP).

🔁 Resending OTP is rate-limited (1 OTP per minute per email) to prevent abuse.

🛡️ Routes like /signup/verify-email and /signup/resend-otp are protected using isInSignupFlow middleware to ensure they can't be accessed directly without initiating the signup process.

### ✅ Step 19: Add categories and user profile

Add user profile. Forgot password, edit user info in future. 

Add categories to listing and use it as filter on home page.