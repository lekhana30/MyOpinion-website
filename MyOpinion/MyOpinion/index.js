require("./model");
const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const hbs =require("handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
const home =require("./controllers/home");
const student =require('./controllers/student');
const teacher = require('./controllers/teacher');
app.set('views',path.join(__dirname,'/views/')); 
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainlayout',layoutsDir:__dirname+'/views/layouts/',handlebars: allowInsecurePrototypeAccess(hbs)}));
app.set('view engine','hbs');
app.listen("9898",()=>{
    console.log("Server started");
});

app.use("/student",student);
app.use("/teacher",teacher);
app.use("/MyOpinion",home);





  



