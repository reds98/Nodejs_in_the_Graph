//CRUD create read update delete
//const mongodb = require("mongodb");
//const MongoClient = mongodb.MongoClient;
//const ObjectID=mongodb.ObjectId
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

//const id = new ObjectID();
//console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect");
    }
    console.log("Connected correctly");
    const db = client.db(databaseName);

    //db.collection("users")
    //.deleteMany({
    //age: 27,
    //})
    //.then((result) => {
    //console.log("RESULT OF DELETE", result);
    //})
    //.catch((error) => {
    //console.log("ERROR", error);
    //});
    //db.collection("users")
    //.updateOne(
    //{ _id: new ObjectID("6174d734f0cb179c020fd028") },
    //{
    //$set: {
    //name: "reds",
    //},
    //}
    //)
    //.then((result) => {
    //console.log("RESULT", result);
    //})
    //.catch((error) => {
    //console.log("ERROR", error);
    //});

    //db.collection("users").findOne(
    //{ _id: new ObjectID("6174d734f0cb179c020fd028") },
    //(error, user) => {
    //if (error) {
    //return console.log("There was an error in fetching process");
    //}
    //console.log(user);
    //}
    //);

    //The following code is for Inserting one document
    //db.collection("users").insertOne(
    //{
    //_id: id,
    //name: "vikram",
    //age: 27,
    //},
    //(error, result) => {
    //if (error) {
    //return console.log("Unable to insert user");
    //}
    //console.log(result);
    //}
    //);
    //The following code is for insertign many documents in a collection
    //db.collection("users").insertMany(
    //[
    //{
    //name: "Jen",
    //age: 28,
    //},
    //{
    //name: "Gunter",
    //age: 34,
    //},
    //],
    //(error, result) => {
    //if (error) {
    //return console.log("There was an error inserting many");
    //}
    //console.log("This is the result \n", result);
    //}
    //);
    console.log("Hola este es una prueba");
  }
);
