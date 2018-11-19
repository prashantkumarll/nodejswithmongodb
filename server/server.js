var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var {mongoose} = require('./db/mongoose');
var {Todo} =require('./models/todo');
var {User} =require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: 'http://localhost:4200'}),bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});

app.get('/todos', (req,res) => {
    Todo.find({}).then((data)=>{ res.send(data);},(err)=>{res.status(400).send(err);});
});

app.post('/users',(req,res) => {
    var user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });
    user.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});

app.get('/users', (req,res) => {
    User.find({}).then((data)=>{ res.send(data);},(err)=>{res.status(400).send(err);});
});




app.listen(port, () =>{
    console.log('Started on port 3000');
})
