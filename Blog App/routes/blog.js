//import controller and map :- main work of route file

const express = require("express");
const router = express.Router();


//import controller
const{dummyLink, likePost, unlikePost} = require("../controllers/likecontroller");
const {createComment} = require("../controllers/commentcontroller");
const { createPost, getAllPosts } = require("../controllers/postcontroller");



//mapping create with route
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike",unlikePost);



//exports
module.exports = router;