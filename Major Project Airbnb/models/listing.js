const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const listningSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => (
            v === "" ? "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D": v
        )
    },
    price: Number,
    location: String,
    country: String
});

const listing = mongoose.model("Listing", listningSchema);
module.exports = listing;