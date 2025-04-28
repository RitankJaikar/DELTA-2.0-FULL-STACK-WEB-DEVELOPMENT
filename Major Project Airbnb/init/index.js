require("dotenv").config();
const mongoose = require("mongoose");
const { sampleListings, sampleReviews } = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGODB_URI2);
}

// Helper function to get random user
const getRandomUser = async () => {
  const users = await User.find(); // Get all users
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]; // Return a random user
};

// Add reviews to the database with a random user as the author
const addReviews = async () => {
  for (const reviewData of sampleReviews) {
    const randomUser = await getRandomUser();
    const review = new Review({
      comment: reviewData.comment,
      rating: reviewData.rating,
      author: randomUser._id, // Assign random user to the review
    });
    await review.save();
    console.log(`Review by user ${randomUser._id} saved.`);
  }
};

// Add random reviews to listings
const addReviewsToListings = async () => {
  const listings = await Listing.find(); // Get all listings
  for (let listing of listings) {
    const randomReviewCount = Math.floor(Math.random() * 9) + 2; // Randomly assign between 2 and 10 reviews
    const randomReviews = await Review.aggregate([
      { $sample: { size: randomReviewCount } }, // Select random reviews
    ]);
    listing.reviews = randomReviews.map((review) => review._id); // Assign random reviews to the listing
    await listing.save();
    console.log(`Added reviews to listing ${listing._id}`);
  }
};

// Initialize the database
const initDB = async () => {
  await Listing.deleteMany({});
  await Review.deleteMany({});

  // Add reviews first
  await addReviews();

  // Add listings
  const newInitData = sampleListings.map((listing) => {
    return { 
      ...listing,
      owner: getRandomUser() // Assign random owner to each listing
    };
  });

  // Save listings with random owners
  for (const data of newInitData) {
    const randomOwner = await getRandomUser(); // Assign a random owner
    const listing = new Listing({
      ...data,
      owner: randomOwner._id, // Set the owner to the random user
    });
    await listing.save();
    console.log(`Listing created by user ${randomOwner._id}`);
  }

  console.log("Listings added.");

  // Add reviews to listings after listings are created
  await addReviewsToListings();
  console.log("Reviews added to listings.");
};

initDB();