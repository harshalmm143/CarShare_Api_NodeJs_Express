const mongoose =require("mongoose")

const UserCarsSchema = mongoose.Schema({

    UserName : String,
    vehicle :[{type : mongoose.Schema.ObjectId,
      ref : 'Vehicle'}],

})
module.exports = mongoose.model("Usercars",UserCarsSchema)