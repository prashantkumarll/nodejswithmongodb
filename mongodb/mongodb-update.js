const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>
{
   if(err){
       return console.log('Unable to connect to mongodb server')
   }
   console.log("Connected to mongodb server");
   const db = client.db('TodoApp');

   /*
   db.collection('Todos').findOneAndUpdate({
       _id: new ObjectID("5bea966da5ddde3060c1fbb9")
   },{
       $set: {
           completed: true
       }
   },{
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   })
   */

   db.collection("Users").findOneAndUpdate({_id: new ObjectID("5bea9eb7ab1ee538cc06f376")}, {
       $set: {
           name: 'Prashant'
       },
       $inc:{
           age: -35
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result);
   });

  client.close();

});

