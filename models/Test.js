const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const TestSchema = new Schema({

    test: {
        type: String,
        required: true,
        unique: true
    }

}, {id: true});

TestSchema.plugin(uniqueValidator);

const Test = mongoose.model("test" , TestSchema);

module.exports = Test;