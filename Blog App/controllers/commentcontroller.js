//import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");



//busines logic
exports.createComment = async (req,res) => {
    try{
        //fetch data from req ki body
        const{post, user, body} = req.body;

        //create a comment object 
        const comment = new Comment({
            post,user,body
        });

        //save the comment inside the database
        const savedComment = await comment.save();


        
        //comment ko ab post waale model ki accordingly daalna bhi to pdega

        //find post by ID,  and add the new comment  to the comment array
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true} ) 
                            .populate("comments") //populate the comments array with comment documents
                            .exec();
        res.json({
            post: udpatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error: "while creating comment"
        });

    }
};

