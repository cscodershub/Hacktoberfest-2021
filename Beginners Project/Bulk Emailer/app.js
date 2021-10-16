require('dotenv').config({path:'./config.env'});
const path = require('path')
const express = require('express');
const ejs = require('ejs')
const connectDB = require('./config/db')
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const emailRouter = require('./routes/emailSender');
const ejsRouter = require('./routes/ejsRouter');
const fileUpload = require('express-fileupload')
const port = process.env.PORT||3000;

//creating app instance
const app = express();
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")));



app.use(express.urlencoded({extended:true}))
app.use(express.json())


if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'))
}
connectDB();
app.use(fileUpload());
app.use('/api/v1/emails',emailRouter)
app.use("/",ejsRouter)


//Error HAndler;
app.use(errorHandler);



const server = app.listen(port, () => {
    console.log(`Server started on port`);
});

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Err: ${err.message}`);
    server.close(()=>process.exit(1))
})