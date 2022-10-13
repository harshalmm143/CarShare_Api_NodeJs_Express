const Usercars = require("./Usercars")

exports.AddUsercars = (req, res) => {

    const NewUsercars = new Usercars({
        UserName: req.body.UserName,
        vehicle: req.body.vehicles


    })
    NewUsercars.save()
        .then((AddUsercars) => {
            res.status(200).json(AddUsercars)

        }).catch((err) => {
            res.status(400).send(err)

        });
}


exports.alluserdata = (req, res) => {
    Usercars.find()
        .populate('vehicle')
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).send(err)

        });
}

exports.updateUsercars = (req, res) => {
    Usercars.updateOne(
        {_id: req.body.uid},
        { $push: { vehicle: req.body.vid } },
    ).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(500).send(err)
        
    });

}