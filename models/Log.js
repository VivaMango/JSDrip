const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const LogSchema = new Schema({

    name: {
        type: String
    },
    contact: {
        type: String
    },
    message: {
        type: String
    }

}, {id: true});

LogSchema.plugin(uniqueValidator);

const Log = mongoose.model("log" , LogSchema);

module.exports = Log;