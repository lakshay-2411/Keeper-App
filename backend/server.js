const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const noteRoutes = require("./routes/notes");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/notes", noteRoutes);

const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/Keeper");


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})