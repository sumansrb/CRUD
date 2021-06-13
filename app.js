const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

const postRoute = require("./Routes/postRoute");


app.use("/api/post", postRoute);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("db connected"));

app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
});