const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing =  require("../models/listing.js")

const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust';

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main(params) {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    const newInitData = initData.data.map(data1 => {
        const imageLink = data1.image.url;
        return {...data1, image: imageLink}
    });
    //console.log(newInitData);
    await Listing.insertMany(newInitData);
    console.log("data was initialized");
}

initDB();