module.exports = (app) => {

    const UserCarsController = require('../src/UserCarsController')

    app.get("/alluserdata", UserCarsController.alluserdata)
    app.post("/AddUsercars", UserCarsController.AddUsercars)
    app.post("/updateUsercars",UserCarsController.updateUsercars)

}