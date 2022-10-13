const User = require('./User')

exports.AddUser = (req, res) => {

    const NewUser = new User({

        Name: req.body.Name,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        Password: req.body.Password
    })

    NewUser.save()
        .then((userDate) => {
            res.status(200).json(userDate)

        }).catch((err) => {
            res.status(400).send(err)
        });
}

exports.AllUser = (req, res) => {
    User.find()
        .then((AllUser) => {
            res.status(200).json(AllUser)

        }).catch((err) => {
            res.status(400).send(err)

        });
}

exports.DeleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.UserId)
        .then((DeleteUser) => {
            res.status(200).json(DeleteUser)

        }).catch((err) => {
            res.status(400).send(err)

        });
}

exports.UpdateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.UserId
        , {
            Name: req.body.Name,
            Mobile: req.body.Mobile,
            Email: req.body.Email,
            Password: req.body.Password
        }, { new: true })
    .then((UpdateUser) => {
        res.status(200).json(UpdateUser)
        
    }).catch((err) => {
        res.status(400).send(err)
        
    });
}