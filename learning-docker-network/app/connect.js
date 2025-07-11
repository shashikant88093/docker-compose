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