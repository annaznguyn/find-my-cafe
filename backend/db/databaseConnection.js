const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/database");

const User = require("../model/User");

module.exports = {
    User
};