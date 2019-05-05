const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Log = require("../../models/Log");

router.post("/createlog" , (req, res) => {
    const newLog = new Log({
        name: req.body.name,
        contact: req.body.contact,
        message: req.body.message
    });

    newLog.save().then(event => res.json(event)).catch(err => console.log(err));

});

module.exports = router;