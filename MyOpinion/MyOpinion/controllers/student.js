
const express = require('express');
    var router = express.Router();
    const mongoose = require('mongoose');
    const Student = mongoose.model('Student');
  


    router.get('/', (req, res) => {
        res.render("student/sfeedback", {
            viewTitle: "Student's Opinion"
        });
    });
    
    router.post('/', (req, res) => {
        if (req.body._id == '')
            insertRecord(req, res);
           
    });
    
    
    function insertRecord(req, res) {
        var student = new Student();
        student.StudentName = req.body.StudentName;
        student.USN = req.body.USN;
        student.CourseTitle = req.body.CourseTitle;
        student.Feedback = req.body.Feedback;
        student.save((err, doc) => {
            if (!err)
              
            res.redirect("student/slist");
                else 
                   {
                   
                    console.log('Error during record insertion : ' + err);
                  
            }
        }
          );
        }   
    
    
  router.get('/slist', (req, res) => {
        Student.find((err, docs) => {
            if (!err) {
                res.render("student/slist", {
                    list: docs
                });
            }
            else {
                console.log('Error in retrieving course list :' + err);
            }
        });
    });
    

    router.get('/:id', (req, res) => {
        Student.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/student/slist');
            }
 else { console.log('Error in  delete :' + err); }
        });
    });
        
    module.exports = router;
































    

    


   
    
    
    
    
    
   
    
  