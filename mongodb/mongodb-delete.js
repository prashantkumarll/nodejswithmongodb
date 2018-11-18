const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>
{
   if(err){
       return console.log('Unable to connect to mongodb server')
   }
   console.log("Connected to mongodb server");
   const db = client.db('TodoApp');

   /*
   db.collection('Todos').deleteOne({text:'Hello2'}).then((result)=>{
       console.log(result);
   });
   */

   db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
       console.log(result);
   });

   db.collection('Users').findOneAndDelete({_id: new ObjectID("5bea9eb7ab1ee538cc06f377")}).then((result) => {
       console.log(JSON.stringify(result,undefined,2));
   });

 // client.close();

});

