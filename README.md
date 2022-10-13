
## Node.js CarShare-Api

## Run Service


```bash
npm start
```

## Api Endpoints




    

## User Routes

 **Create User** 

 `post |  http://localhost:5000/AddUser`

|Key | Value|
-----|------
| Name | Harsh |
| Mobile | 0987656789 |
| Email |  example@.com |
| Password | Password |

 **Get all User**
 
`get |  http://localhost:5000/AllUser`


 **Delete User**
 
`delete |  http://localhost:5000/DeleteUser/:UserId`


 **Update User**
 
`put |  http://localhost:5000/UpdateUser/:UserId`


## Vehicle Routes

**Add Vehicle** 

 `post |  http://localhost:5000/AddVehicle`

|Key | Value|
-----|------
| Model | Fortuner |
| Company | Toyota |
| Image | 🏎️  |
| Rent | 1500 |



 **Get all Vehicle**
 
`get |  http://localhost:5000/AllVehicle`


 **Delete Vehicle**
 
`delete |  http://localhost:5000/DeleteVehicle/:VehicleId`


 **Update Vehicle**
 
`put |  http://localhost:5000/UpdateVehicle/:VehicleId`

**Get Vehicle By Rent**

`get |  http://localhost:5000c/getvehiclebyrent`

**Get Vehicle By Given Rent **

`post |  http://localhost:5000/getvehiclebygivenrent`




## Booking Routes


**Booking**

  | key | value |
   -----|-----
  |  CustomerName   | Arjun|
  |  CustomerMobile | 09876543456|
  | CustomerAddress | abc |
  | VehicleId       | id |
  | BookingDate     | 10-08-2022 |
  | BookingStatus   | Confirm |
  | FromDate        | 11-08-2022 |
  | ToDate          | 12-08-2022 |
  
  
  
   **Get all Booking By Rent**
 
`get |  http://localhost:5000/AllBookingByRent`


 **Delete Booking**
 
`delete |  http://localhost:5000/DeleteBooking/:BookingId`


 **Update Booking**
 
`put |  http://localhost:5000/UpdateBooking/:BookingId`



  
