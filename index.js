require("dotenv").config();

// console.log(process.env.USER, process.env.PASSWORD, process.env.PORT, process.env.DATABASE);

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require('cors');

const indexRouter = require("./src/Routes/index");

const app = express();

// const port = 7000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});

app.use(express.static("public"));
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })) //x-www-form-urlencoded
app.use(logger("dev"));
app.use(cors());

app.use(indexRouter);

// app.get("/1", (_,res) => {
//     // res.send("Hello world");
//     res.json({
//         msg: "hello world",
//         name: "gana"
//     });
// });