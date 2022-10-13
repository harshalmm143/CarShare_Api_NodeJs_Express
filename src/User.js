const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    Name: String,
    Mobile: String,
    Email: String,
    Password: String
})
module.exports = mongoose.model('User', UserSchema)




