const mongoose = require("mongoose");

const maxRetry = 5; // Maximum number of retry attempts
let attempt = 0;

const connectWithRetry = async () => {
  while (attempt < maxRetry) {
    try {
      await mongoose.connect(process.env.MONGODB_URI2);
      console.log("Connected to MongoDB");
      return;
    } catch (err) {
      attempt++;
      console.error(
        `MongoDB connection error (Attempt ${attempt}/${maxRetry}):`,
        err
      );

      if (attempt >= maxRetry) {
        console.error("Max retry attempts reached. Could not connect to MongoDB.");
        return;
      }

      console.log(`Retrying in 5 seconds...`);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

// Start connection process
connectWithRetry();