# Massive Lecture Aid

## Purpose
This repository contains a basic demonstration and boilerplate for `MassiveJS`. A front-end interface has been created to interact with basic CRUD operations. All of your logic will be in the server folder, with the provided `server.js` and `controller.js` files.

## Setup

1. Run `npm i` to install the necessary dependencies. They include:

    - express
    - massive
    - dotenv
    - axios

2. Create a `.env` file with a `SERVER_PORT` variable (I use port 9000) and a `CONNECTION_STRING` variable.

    - Ensure you append `?ssl=true` to the end of the `CONNECTION_STRING`.

3. Create a basic server setup, and paste in the following piece of top-level middleware to bring in our front-end UI.
    - Run `nodemon` to start the server.
```
app.use(express.static(`${__dirname}/../public/frontend`))
```

4. Open your browser to `http://localhost:9000` (or whichever port number you placed in your .env file)

### Tasks

1. Create a table in your database. It can be named anything you'd like, but it needs the following columns:
    - id (serial primary key)
    - name (varchar)
    - phone (varchar)
    - address (varchar)

2. Create these endpoints:
    - `get('/api/class)`
    - `post('/api/class)`
    - `put('/api/class/:id`
    - `delete('/api/class/:id`

3. Utilizing MassiveJS, create the logic necessary to read, create, update, and delete from the table you created in your database.
    - It is helpful to start each piece of logic in SQL Tabs and work your way backwards from there.

### Notes for the Instructor
Switch to the `finished` branch to find a working copy of the code.