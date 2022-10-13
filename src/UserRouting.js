module.exports = (app) => {

    const UserController = require('./UserController')

    app.get("/AllUser", UserController.AllUser)
    app.post("/AddUser", UserController.AddUser)
    app.put("/UpdateUser/:UserId", UserController.UpdateUser)
    app.delete("/DeleteUser/:UserId", UserController.DeleteUser)

}


