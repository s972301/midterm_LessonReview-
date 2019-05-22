const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectID = require("mongoose").ObjectID
    // this will be our data base's data structure 
const DataSchema = new Schema({
    semester: String,
    lesson: String,
    teacher: String,
    teaching: Number,
    sweet: Number,
    content: Number,
    test: Number,
    homework: Number,
    comment: String,
    message: [String]
}, { timestamps: true });

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Review", DataSchema);