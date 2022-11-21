// Importing mongoose
var mongoose = require("mongoose");



var user;

var UserSchema = new mongoose.Schema(
    {
        name: { type: String, default: "" }
    });

//Export user module
user = module.exports = mongoose.model("USER", UserSchema);
