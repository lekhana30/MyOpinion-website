
const mongoose = require("mongoose");

var  TSchema= new mongoose.Schema({
    TeachersName :{
        type:String,
        required:"Required"
    },
    Department:{
        type:String,
        required:"Required"
    },
    CourseTitle:{
        type:String,
        required:"Required"
    },
    Feedback:{
        type:String,
        required:"Required"
    }
    
    });     

mongoose.model("Teacher",TSchema);
