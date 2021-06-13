const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    imgUrl: String,
    title: String,
    heading: String,
    content: String
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema)