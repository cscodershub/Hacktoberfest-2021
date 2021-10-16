const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    typeof : {
        type:String,
        default:"user"
    },
    isblocked : {
        type:Boolean,
        default:false
    },
    bookings : Array,
    dailyBookingDone : {
        type:Boolean,
        default:false
    },
    mobile : {
        type:Number
    },
    uid : {
        type:String,
    },
    email:{
        type:String,
        match:[
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            "Please enter valid email address."
        ],
        required:true
    },
    address : {
        type:String
    },
    city : {
        type:String
    },
    name :{
        type:String
    },
    otp : {
        type:String
    },
    otpExpires :{
        type:String
    },
    hash : {
        type:String
    },
    salt : {
        type:String
    },
    isGolfie: {
        type:Boolean,
        default:false
    },
    isSubed : {
        type:Boolean,
        default:false
    },
    subscription : mongoose.Schema.ObjectId

})
module.exports = mongoose.model('User',emailSchema);
