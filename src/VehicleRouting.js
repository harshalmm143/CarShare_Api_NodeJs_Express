module.exports = (app) => {

    const VehicleController = require('../src/VehicleController')

    app.get("/AllVehicle", VehicleController.AllVehicle)
    app.post("/AddVehicle", VehicleController.AddVehicle)
    app.put("/UpdateVehicle/:VehicleId", VehicleController.UpdateVehicle)
    app.delete("/DeleteVehicle/:VehicleId", VehicleController.DeleteVehicle)
    app.post("/getVehiclesByCompany", VehicleController.getVehiclesByCompany)
    app.get("/getvehiclebyrent",VehicleController.getvehiclebyrent)
    app.post("/getvehiclebygivenrent",VehicleController.getvehiclebygivenrent)
    app.get("/getSortedVehicle",VehicleController.getSortedVehicle)

}