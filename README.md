#  SWE Project — Back-End (Milestone 5)

This is the back-end implementation for our SWE Project (Milestone 5).  
The back-end is built using **Node.js**, **Express.js**, and **MongoDB Atlas**.  
In this milestone, we implemented the server-side logic, RESTful APIs, and connected the system to a cloud MongoDB database.

---

##  Features Implemented

### ✔ Node.js + Express Server
A fully functional Express.js server with proper routing, middleware, and controllers.

###  MongoDB Integration
The application is connected to **MongoDB Atlas** using Mongoose.  
Data is stored in a cloud database named **SWEproject-4**.

###  RESTful APIs (Users)
The back-end supports full CRUD operations:

- **GET** `/api/users` — Retrieve all users  
- **GET** `/api/users/:id` — Retrieve a single user by ID  
- **POST** `/api/users` — Create a new user  
- **PUT** `/api/users/:id` — Update a user  
- **DELETE** `/api/users/:id` — Delete a user  

###  Error Handling
A custom error handler is included to return useful error messages.

###  Data Validation (Basic)
Checks for duplicate email before creating a new user.

###  Tested Using CURL
All API endpoints were tested using curl commands in the terminal.

---

##  Project Structure

server/
│
├── controllers/
│   └── userController.js        # Handles API logic (CRUD operations)
│
├── models/
│   └── User.js                  # Mongoose schema/model for users
│
├── routes/
│   └── userRoutes.js            # Defines API endpoints (/api/users)
│
├── server.js                    # Main Express server file
├── .env                         # Environment variables (Mongo URI, PORT)
└── package.json                 # Dependencies & scripts
---

## 🔧 Technologies Used

Technology : Purpose 
 Node.js : Server runtime 
 Express.js : Web framework 
 MongoDB Atlas : Cloud database 
 Mongoose : Database ORM 
 dotenv : Environment variables 
 nodemon : Development auto-restart 

## Start the Server
npm run dev

npm start

If successful, you will see:
Server running on port 3000
MongoDB connected

Create a User
curl -i -X POST http://127.0.0.1:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"TestUser","email":"test@example.com","password":"123456"}'

Get All Users:
curl -i http://127.0.0.1:3000/api/users

Update a User:
curl -i -X PUT http://127.0.0.1:3000/api/users/USER_ID \
-H "Content-Type: application/json" \
-d '{"name":"UpdatedName"}'

Delete a User:
curl -i -X DELETE http://127.0.0.1:3000/api/users/USER_ID

