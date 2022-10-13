const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const server = express()
const cors = require("cors")
const multer = require("multer");
const path = require("path")
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())



mongoose.connect('mongodb://localhost:27017/CarApi', {
    useNewUrlParser: true,

}, (err) => {
    if (!err) {
        console.log('MongoDB server Connected.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const imageStorege = multer.diskStorage({
    destination: "Images",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const imageUpload = multer({
    storage: imageStorege,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error("Please upload a Image...."));
        }
        cb(undefined, true)
    },

});





server.post(
    "/uploadimages", imageUpload.single("image"), (req, res) => {
        res.status(200).json({ filepath: "/images/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.massage })
    }
);

server.use(express.static("Images"))
server.use("/images", express.static("Images"))



require("./src/UserRouting")(server)
require("./src/VehicleRouting")(server)
require("./src/BookingRouting")(server)
require("./src/UsercarsRouting")(server)

server.listen(5000, () => {
    console.log("server started")
})

