# backend-API

Neha Ashwin

August 2024

Description: This is a REST API that supports GET, POST, PUT, and DELETE
functions for applicants in a database. It is written in Javascript using
node.js along with express and mongoose libraries.

Files:
app.js - Contains the REST API code that supports the functions
package.json, package-lock.json - Contains version information and dependencies

Instructions:
To run the api via localhost, type 'npm start' into a terminal.
A message will appear telling which port the program is listening on,
default port is 4000. 

Once the program is listening, use the urls for the different requests: 

User Requests:

    http://localhost:4000/api/user for GET request

    http://localhost:4000/api/user/signup for POST request signup

    http://localhost:4000/api/user/login for POST request login

Blog Requests:

    http://localhost:4000/api/blog for GET request

    http://localhost:4000/api/blog/:id for GET request by blogID

    http://localhost:4000/api/blog/user/:id for GET request by userID

    http://localhost:4000/api/blog/add for POST request

    http://localhost:4000/api/blog/update/:id for PUT request update by blogID

    http://localhost:4000/api/blog/delete/:id for DELETE request by blogID

To enter User data into the database use the following schema entered into the body:

    {
        "name": String,
        "email": Must be unique,
        "password": minimum length 6
    }

Example schema:

    {
        "name": "Hema",
        "email": "hema@test.com",
        "password": 123456
    }

To enter Blog data into the database use the following schema entered into the body:

    {
        "title": String,
        "description": String,
        "image": image URL,
        "user": user ID
    }

Example schema:

    {
        "name": "My Sample Blog",
        "description": "this is a sample blog",
        "image": "image@url.com",
        "user": "123456789"
    }
