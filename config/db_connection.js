require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

client.connect();
const database = client.db("mydb");


module.exports = database;
