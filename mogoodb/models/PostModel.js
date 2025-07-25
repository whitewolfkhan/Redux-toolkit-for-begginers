// In this, we are going to define the schema for the blueprint of our post thing, so what data is exactly we need to store

const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: "Anonymous"
    }
},{
    timestamps: true,
})

module.exports = mongoose.model("Post", postSchema)