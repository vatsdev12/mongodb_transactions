// Importing mongoose
var mongoose = require("mongoose");



var addess;

var AddressSchema = new mongoose.Schema(
    {
        address: { type: String, default: "" },
        user_id: { type: String, default: "" }

    });

//Export user module
addess = module.exports = mongoose.model("ADDRESS", AddressSchema);
