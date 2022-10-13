
const Booking = require('./Booking')

exports.AddBooking = (req, res) => {

    const NewBooking = new Booking({
        CustomerName: req.body.CustomerName,
        CustomerMobile: req.body.CustomerMobile,
        CustomerAddress: req.body.CustomerAddress,
        VehicleId: req.body.VehicleId,
        BookingDate: new Date(),
        BookingStatus: req.body.BookingStatus,
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate

    })

    NewBooking.save()
        .then((AddBooking) => {
            res.status(200).json(AddBooking)

        }).catch((err) => {
            res.status(400).send(err)

        });
}

exports.AllBooking = (req, res) => {
    Booking.find()
        .populate('VehicleId')
        .then((AllBooking) => {
            res.status(200).json(AllBooking)

        }).catch((err) => {
            res.status(400).send(err)

        });
}




exports.DeleteBooking = (req, res) => {

    Booking.findByIdAndDelete(req.params.BookingId)
        .then((DeleteBooking) => {
            res.status(200).json(DeleteBooking)

        }).catch((err) => {
            res.status(400).send(err)

        });
}

exports.UpdateBooking = (req, res) => {
    Vehicle.findByIdAndUpdate(req.params.BookingId
        , {
            CustomerName: req.body.CustomerName,
            CustomerMobile: req.body.CustomerMobile,
            CustomerAddress: req.body.CustomerAddress,
            VehicleId: req.body.VehicleId,
            BookingDate: req.body.BookingDate,
            BookingStatus: req.body.BookingStatus,
            FromDate: req.body.FromDate,
            ToDate: req.body.ToDate

        }, { new: true })
        .then((UpdateBooking) => {
            res.status(200).json(UpdateBooking)

        }).catch((err) => {
            res.status(400).send(err)

        });
}


exports.AllBookingByRent = (req, res) => {
    Booking.find()
        .populate({
            path: 'VehicleId',
            match: { Rent: { $gt: 2000 } },
            

        })
        .then((AllBookingByRent) => {
            const bookings = [];

            AllBookingByRent.map((booking) => {
                if (booking.VehicleId === null) {
                    return
                } else {
                    bookings.push(booking)
                }
            })
            res.status(200).json(bookings)

        }).catch((err) => {
            res.status(400).send(err)

        });
}
