//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{   //koin si post pr comment kr rhe h

        type: mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the postmodel
    },

    user:{      //koin comment kr rha h

        type:String,
        required:true,
    },

    body:{       //kya comment kr rha h

        type:String,
        required:true,
    }
});


//export
module.exports = mongoose.model("Comment",commentSchema);

