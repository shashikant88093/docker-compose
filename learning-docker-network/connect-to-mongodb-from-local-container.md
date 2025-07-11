# Connect to MongoDB from Local Container

<!--
This code snippet demonstrates how to connect to a MongoDB instance running on the host machine from a Node.js application inside a Docker container using Mongoose.

- The `mongoose` library is imported to handle MongoDB connections.
- The `MongoDbLocal` asynchronous function attempts to connect to a MongoDB server at `mongodb://host.docker.internal:27017/docker`.
    - `host.docker.internal` is a special DNS name that allows Docker containers to access services running on the host machine.
    - The `useNewUrlParser: true` option ensures the new MongoDB connection string parser is used.
- On successful connection, "Connected Successfully" is logged to the console.
- If the connection fails, the error is caught and logged.
- The function is exported for use in other modules.

This setup is useful for local development when you want your Dockerized Node.js app to communicate with a MongoDB instance running outside the container.
-->
const mongoose = require('mongoose')

async function MongoDbLocal() {
    try {
        await mongoose.connect('mongodb://host.docker.internal:27017/docker', {
            useNewUrlParser: true
        });
        console.log("Connected Successfully");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {MongoDbLocal}


Pull the MongoDB Docker Image 
```bash
docker pull mongodb/mongodb-community-server:latest
```

# Run MongoDB Container
```bash 
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```
