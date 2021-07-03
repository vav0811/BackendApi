var express=require('express');
var router=express.Router();
var student=require("../models/student");
var mongoose=require('mongoose');

router.get('/getstudents',function(req,res){
    student.find().then(
        data=>{ res.json(data);
        }
    ).catch((err)=>{
        res.send("Couldn't find any data");
    }

    )



});

router.post('/savestudent',function(req,res){
    var newstudent=new student({
        Name:req.body.Name,
        Class:req.body.Class,
        Section:req.body.Section,
        Subject:req.body.Subject,
    })

    newstudent.save(function(err){
        if(err){throw err}
        res.send("Student data saved");
    });
});

module.exports=router;