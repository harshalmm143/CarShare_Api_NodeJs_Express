<p align="right">
<img src='https://user-images.githubusercontent.com/102899317/195816326-d2c54fd9-22de-4ef1-919d-ce3249198b58.png' width="400" height="180" />
</p>




## Node.js CarShare-Api

This full CarShare API build using Express and Mongodb. Here it contains all the required functionalities of a full-fledged CarShare API like  User Login, and you can  add multiple cars,  Edit & Delete and last you can see the Booking Details  etc ....


## setup



```bash
$ git clone https://github.com/harshalmm143/carShare_Api_NodeJs_Express.git
$ cd carShare_Api_NodeJs_Express
$ npm install
```



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

**Get Vehicle By Given Rent**

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



  
## Tech Stack

**Server:** Node, Express


## 🚀 About Me
I'm a full stack developer...


## 🛠 Skills
Javascript, HTML, CSS, ReactJs, NodeJs, ReactNative 



## Authors 👨🏻‍💻

- [@harshalmm143](https://www.github.com/harshalmm143)




