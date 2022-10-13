const mongoose = require("mongoose")

const BookingSchema = mongoose.Schema({


    CustomerName: String,
    CustomerMobile: String,
    CustomerAddress: String,
    VehicleId: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
    BookingDate: Date,
    BookingStatus: String,
    FromDate: Date,
    ToDate: Date

})
module.exports = mongoose.model('Booking', BookingSchema)