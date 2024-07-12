//import mongoose
const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    
    title:{                           //title aur body object hai  aur like aur comments array store kr rhe h
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },

    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],

    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]

}); 



//exports
module.exports = mongoose.model("Post" , postSchema);



