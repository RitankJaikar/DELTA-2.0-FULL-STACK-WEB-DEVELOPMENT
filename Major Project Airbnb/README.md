# 🏡 Wanderlust

🔗 **Live Demo**: [explore-wanderlust.vercel.app](https://explore-wanderlust.vercel.app/listings)

**Wanderlust** is a full-stack property listing web application built using **Node.js**, **Express**, **MongoDB**, and **EJS**. It allows users to explore real estate listings, view property details, and manage data with full CRUD functionality. The project follows a robust **MVC architecture**, making it highly maintainable and scalable.

---

## 🧠 Key Highlights

- 🏗️ Built with MVC (Model-View-Controller) pattern
- 🔐 Authentication system for user login/signup/logout
- 🏘️ Full CRUD for property listings
- 🌐 Deployed on **Vercel**
- 💾 MongoDB integration via **Mongoose**
- 📃 Dynamic EJS templates for clean UI
- 💅 Styled using **Bootstrap** and custom CSS
- ⚠️ Comprehensive error handling with custom error classes
- ☁️ Image uploads handled using **Cloudinary**
- 📁 Modular file structure for maintainability

---

## 📐 MVC Architecture

### 📦 Model (MongoDB via Mongoose)
- Defines schemas and data relationships
- Example models:
  - `Listing` (title, price, image, location, etc.)
  - `Review`
  - `User`

### 🎨 View (EJS Templates)
- Dynamic and reusable views
- Pages: Home, Listings, Details, Login, Signup, Errors

### 🛠️ Controller (Express)
- Contains business logic
- Handles database interaction and view rendering
- Modularized for each resource (listing, review, user)

---

## 🛠️ Tech Stack

| Category        | Tech                          |
|----------------|-------------------------------|
| Backend         | Node.js, Express              |
| Database        | MongoDB (via Mongoose)        |
| Frontend (View) | EJS Templates                 |
| Styling         | Bootstrap, CSS                |
| Auth            | Express-Session, Bcrypt       |
| Image Uploads   | Cloudinary                    |
| Validation      | Joi                           |
| Deployment      | Vercel                        |
| Version Control | Git & GitHub                  |

---

## 🧪 Features

- ✅ User Signup/Login/Logout
- ✅ Flash messaging using `connect-flash`
- ✅ Create, read, update, delete property listings
- ✅ Review system with validation
- ✅ Server-side form validation using Joi
- ✅ Error handling middleware & custom error class
- ✅ RESTful routing structure
- ✅ EJS partials for DRY templates
- ✅ Responsive layout with Bootstrap
- ✅ Pre-seeded data for quick start

---

## 🚀 Getting Started

### 🧰 Prerequisites
- Node.js and npm installed
- MongoDB running locally or via Atlas
- `.env` file with required variables:

```env
MONGODB_URI1     = your_local_mongodb_uri
MONGODB_URI2     = your_cloud_mongodb_uri
CLOUD_NAME       = your_cloudinary_cloud_name
CLOUD_API_KEY    = your_cloudinary_api_key
CLOUD_API_SECRET = your_cloudinary_api_secret
MAP_TOKEN        = your_mapbox_token
SESSION_SECRET   = your_session_secret
NODE_ENV         = dev / production
```

### 💻 Installation Steps

1. Clone the repo  
 `git clone https://github.com/your-username/wanderlust.git`

2. Install dependencies  
 `npm install`

3. Seed the database  
 `node init/index.js`

4. Run the server  
 `npm start` or `nodemon app.js`

5. Visit `http://localhost:3000/listings` in your browser

---

## 🚧 Error Handling

- ❌ Graceful handling of 404s and server errors
- ❗ Custom `ExpressError` class for informative messages
- 🔄 Wrapped async controllers using utility `asyncWrap`

---

## 🚀 Deployment

- **Frontend & Backend Deployed on**: [Vercel](https://explore-wanderlust.vercel.app/listings)
- **Code Repository**: [GitHub](https://github.com/RitankJaikar/Wanderlust---Full-Stack-Project)

---

## 📬 Contact

Feel free to connect via [LinkedIn](https://www.linkedin.com/in/ritank-jaikar/) or open issues for questions.

---