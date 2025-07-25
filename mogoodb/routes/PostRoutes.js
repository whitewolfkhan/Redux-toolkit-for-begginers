// this file is responsible for debbug of application

const express = require("express")
const PostModel = require("../models/PostModel")
const router = express.Router()


//get all post
router.get("/", async(req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts) //we have received all this things and we are going to send as a json format
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//create a post
router.post("/", async(req, res) => {
    const newPost = await PostModel(req.body); //send the data from frontend to backend
    try {
        await newPost.save(); //save model in backend
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//delete a post
router.delete("/:id", async(req, res) => {
    const {id} = req.params;
    try {
        await PostModel.findByIdAndDelete(id);
        res.status(200).json({message: "Post deleted"});
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
});



module.exports = router