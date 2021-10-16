require('dotenv').config({path:'./config.env'})
const mongoose = require('mongoose');

const connectDB = async () => {
    const db =await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`${db.connection.host}`)
}

module.exports = connectDB; 