module.exports = (app) => {

    const BookingController = require('../src/BookingController')

   
    app.put("/UpdateBooking/:BookingId", BookingController.UpdateBooking)
    app.delete("/DeleteBooking/:BookingId", BookingController.DeleteBooking)
    app.get("/AllBookingByRent",BookingController.AllBookingByRent)

}