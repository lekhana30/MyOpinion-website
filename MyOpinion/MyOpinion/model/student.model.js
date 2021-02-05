const mongoose = require("mongoose");

var  SSchema= new mongoose.Schema({
    StudentName :{
        type:String,
        required:"Required"
    },
    USN:{
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
    
mongoose.model("Student",SSchema);
