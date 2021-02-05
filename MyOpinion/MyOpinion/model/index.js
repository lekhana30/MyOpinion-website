const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost:27017/MyOpinion",{ useNewUrlParser: true ,useUnifiedTopology: true},(error)=>{
if(!error)
{
    console.log("Success Connected");
}
else{
    console.log("Error connecting to database."+ error);
}
});

 require("./teacher.model");
 require("./student.model");