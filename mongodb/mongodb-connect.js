const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

if(err){
    return console.log('Unable to connect to Mongo server.');
}
console.log('Connected to Mongodb server');
const db = client.db('TodoApp');

/*
db.collection('Todos').insertOne({
    text: 'Something to do',
    completed:false
},(err,result) => {
    if(err){
        return console.log('Unable to insert todo',err)
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});
*/

db.collection('Users').insertMany([{
    name: 'Jen', age: 25, location: 'Philadelphia'
},{
    name: 'Mike', age: 25, location: 'Philadelphia'
},{
    name: 'Andrew', age: 25, location: 'Philadelphia'
},{
    name: 'Andrew', age: 25, location: 'Philadelphia'
},
{
    name: 'Andrew', age: 25, location: 'Philadelphia'
}
],(err, result) => {
    console.log(JSON.stringify(result.ops,undefined,2));
});

    client.close();
});