const express= require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json()); 


//importing route files
const blog = require("./routes/blog")

//mpont
app.use("/api/v1",blog);

//database connectivity importing
const connectWithDB = require("./config/database");
connectWithDB();

//server starting
app.listen(PORT, () => {
    console.log(`app is runnnig at at port no ${PORT}`);
})

app.get("/", (req, res)=>{
    res.send("this is our homepage")
})