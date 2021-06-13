const express = require("express");
const router = express.Router();

const {
    addPost,
    deletePost,
    updatePost
} = require("../Controller/postController");


router.post("/addpost", addPost);
router.patch("/editpost/:postId", updatePost);
router.delete("/deletepost/:postId", deletePost);

module.exports = router;