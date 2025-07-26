let mongoose = require('mongoose');

let adminSchema =  mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    password:{

    type:String,
    requires:true,
    }


})

let Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;