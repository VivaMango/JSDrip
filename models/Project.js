const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String
    }
}, {id: true});

ProjectSchema.plugin(uniqueValidator);

const Project = mongoose.model("project" , ProjectSchema);

module.exports = Project;