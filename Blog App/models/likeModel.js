//import mongoose
const mongoose = require("mongoose");


//route handler
const likeSchema = new mongoose.Schema({         //is line ka mtlb h ek schema define krna 

    post:{   //koin si post pr like kr rhe h

        type: mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the postmodel
    },

    user:{      //koin like kr rha h

        type:String,
        required:true,
    },
});


//exports
module.exports = mongoose.model("Like" , likeSchema);