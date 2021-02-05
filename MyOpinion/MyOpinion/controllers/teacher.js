
const express = require('express');
    var router = express.Router();
    const mongoose = require('mongoose');
   
   const Teacher = mongoose.model('Teacher');


    router.get('/', (req, res) => {
        res.render("teacher/tfeedback", {
            viewTitle: "Teacher's Opinion"
        });
    });
    
    router.post('/', (req, res) => {
        if (req.body._id == '')
            insertRecord(req, res);
           
    });
    
    
    function insertRecord(req, res) {
        var teacher = new Teacher();
        teacher.TeachersName = req.body.TeachersName;
        teacher.Department = req.body.Department;
        teacher.CourseTitle = req.body.CourseTitle;
        teacher.Feedback = req.body.Feedback;
        teacher.save((err, doc) => {
            if (!err)
                res.redirect("teacher/tlist");
                else
                {
                   
              console.log('Error during record insertion : ' + err);
        }}
            
          );
        }   
    
    
   router.get('/tlist', (req, res) => {
        Teacher.find((err, docs) => {
            if (!err) {
                res.render("teacher/tlist", {
                    list: docs
                });
            }
            else {
                console.log('Error in retrieving course list :' + err);
            }
        });
    });
    
    
    router.get('/:id', (req, res) => {
        Teacher.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/teacher/tlist');
            }
 else { console.log('Error in  delete :' + err); }
        });
    }); 
    

    module.exports = router;
































    

    


   
    
    
    
    
    
   
    