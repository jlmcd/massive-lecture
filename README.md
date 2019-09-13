Massive Lecture Aid

# Purpose
This repository contains a basic demonstration and boilerplate for `MassiveJS`. A front-end interface has been created to interact with basic CRUD operations.

## Setup

1. Run `npm i` to install the necessary dependencies. They include:

    - express
    - massive
    - dotenv
    - axios

2. Create a `.env` file with a `SERVER_PORT` variable (I use port 9000) and a `CONNECTION_STRING` variable.

    - Ensure you append `?ssl=true` to the end of the `CONNECTION_STRING`.

3. Run nodemon to start up the server.

4. Open your browser to `http://localhost:9000` (or whichever port number you placed in your .env file)

5. Create a table in your database. It can be  with the following columns:
    - id
    - name
    - phone
    - address

6. Endpoints to create:
    - `get('/api/class)`
    - `post('/api/class)`
    - `put('/api/class/:id`
    - `delete('/api/class/:id`

## Schema

Drop the `seed.sql` file into SQL Tabs to get the appropriate table schema and dummy data.