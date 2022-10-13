
const Vehicle = require("./Vehicle")

exports.AddVehicle = (req, res) => {

    const NewVehicle = new Vehicle({

        Model: req.body.Model,
        Company: req.body.Company,
        Image: req.body.Image,
        Rent: req.body.Rent
    })

    NewVehicle.save()
        .then((AddVehicle) => {
            res.status(200).json(AddVehicle)

        }).catch((err) => {
            res.status(400).send(err)
        });
}

exports.AllVehicle = (req, res) => {
    Vehicle.find()
        .then((AllVehicle) => {
            res.status(200).json(AllVehicle)

        }).catch((err) => {
            res.status(400).send(err)

        });
}

exports.DeleteVehicle = (req, res) => {

    Vehicle.findByIdAndDelete(req.params.VehicleId)
        .then((DeleteVehicle) => {
            res.status(200).json(DeleteVehicle)

        }).catch((err) => {
            res.status(400).send(err)
        });
}

exports.UpdateVehicle = (req, res) => {

    Vehicle.findByIdAndUpdate(req.params.VehicleId
        , {
            Model: req.body.Model,
            Company: req.body.Company,
            Type: req.body.Type,
            Image: req.body.Image,
            Rent: req.body.Rent

        }, { new: true })
        .then((UpdateVehicle) => {
            res.status(200).json(UpdateVehicle)


        }).catch((err) => {
            res.status(400).send(err)

        });

}

exports.getVehiclesByCompany = (req, res) => {
    const CompanyName = req.body.cName
    Vehicle.find({ Company: CompanyName })
        .then((vehicles) => {
            res.status(200).json(vehicles)
        }).catch((err) => {
            res.status(500).send(err)
        });

}

exports.getvehiclebyrent = (req, res) => {
    Vehicle.find()
        .where('Rent')
        .gt(2000)
        .then((vehicles) => {
            res.status(200).json(vehicles)

        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.getvehiclebygivenrent = (req, res) => {
    const lower = req.body.lr
    const upper = req.body.ur
    Vehicle.find().where('Rent')
        .gt(lower)
        .lt(upper)
        .then((vehicles) => {
            res.status(200).json(vehicles)

        }).catch((err) => {
            res.status(500).send(err)
        });

}

exports.getSortedVehicle = (req, res) => {
    Vehicle.find().sort('Rent')
    .then((vehicles) => {
        res.status(200).json(vehicles)

    }).catch((err) => {
        res.status(500).send(err)
    });

}


