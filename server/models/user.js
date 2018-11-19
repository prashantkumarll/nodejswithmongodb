var mongoose = require('mongoose');

var User = mongoose.model('Users',{
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    age:{
        type: Number,
        defualts:18
    }
});

module.exports = {User};