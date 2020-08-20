//CRUD
// const mongodb= require("mongodb")
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID
const { MongoClient, ObjectID, DBRef } = require("mongodb");
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id= new ObjectID()
// console.log(id.id)
// console.log(id.getTimestamp())

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unabale to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("task").deleteOne({
        description:"Do the laundry"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
    // db.collection("users").deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5f3ba43aa0c8431683ee9e77"),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("task").updateMany({
    //     completed:false

    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    //})
    // CHALLENGE
    // db.collection("task").findOne({
    //     _id:new ObjectID("5f3c022cd95d0a301013d9e2")
    // },(error,user)=>{
    //     console.log(user)
    // })
    // db.collection("task").find({completed:false}).toArray((error,users)=>{
    //     console.log(users)
    // })

    //  EXAMPLE OF QUERYING DOCUMENTS IN MONGO
    //  db.collection("users").findOne({_id:new ObjectID("5f3c224873d30f133fe076e4")},(error,user)=>{
    //      if(error){
    //          return console.log("Unable to fecth that user")
    //      }
    //      console.log(user)

    //  })
    //  db.collection("users").find({age:27}).toArray((error,users)=>{
    //      console.log(users)

    //  })
    //  db.collection("users").find({age:27}).count((error,count)=>{
    //     console.log(count)

    // })

    // EXAMPLE OF INSERTING IN MONGO
    // db.collection("users").insertOne({
    //     _id:id,s
    //     name:"Reds",
    //     age:22
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }
    //     console.log(result.ops)

    // })
    // db.collection("users").insertMany([
    //     {
    //         name:"Jen",
    //         age:28

    //     },
    //     {
    //         name:"Gunther",
    //         age:28
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert documents ")
    //     }
    //     console.log(result.ops)

    // })

    //Goal: Insert 3 tasks into a new task collection
    // -description(string), completed (boolean)
    //
    // db.collection("task").insertMany([
    //         {
    //             description:"Do the laundry",
    //             completed:false

    //         },
    //         {
    //             description:"Do exercise",
    //             completed:true

    //         }
    //     ],(error,result)=>{
    //         if(error){
    //             return console.log("Unable to insert task collecion ")
    //         }
    //         console.log(result.ops)

    //     })
  }
);
