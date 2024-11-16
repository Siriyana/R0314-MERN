PROJECT OVERVIEW:

The goal of this project was to create a server for managing a cat database using MongoDB. The server exposes a RESTful API with the following routes for interacting with the database:

GET /api/getall - Retrieves a list of all cats in the database.
GET /api/:id - Retrieves a specific cat by its ID.
POST /api/add - Adds a new cat to the database.
PUT/PATCH /api/update/:id - Updates an existing cat's details by its ID.
DELETE /api/delete/:id - Removes a cat from the database by its ID.
The API allows you to manage cat records, including information like the cat's name, color, age, personality, and more. This provides a foundation for a full-stack application where the data can be displayed and interacted with through a front-end interface.


TECHNOLOGIES USED:
1.Node.js for backend server and API
2.Express.js framework
3.MongoDB and Mongoose for database
4.Postman for testing API routes


GIT REPOSITORY: https://github.com/Siriyana/R0314-MERN/tree/main/FullStack/Projects/Project2
RENDER: https://r0314-mern-7y23.onrender.com