const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err,req,res,next)=>{
    let error = { ...err }
console.log(err.stack);
error.message=err.message;
if(err.name === 'CastError'){
    const message=`Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message,400);
    
}
if(err.code === 11000){
    const message=`The Bootcamp with given name already exists`;
    error = new ErrorResponse(message,400);
    
}
if(err.name === 'ValidationError'){
    const message=Object.values(err.errors).map(val=>val.message);
    error = new ErrorResponse(message,400);
    
}
res.status(error.statusCode||500).json({success:false,error:error.message})
}

module.exports=errorHandler;