'use strict'
var express=require('express');

var api=express.Router();


api.get("/user",function (req,res) {
    res.send({"ff":"ss"})
});
module.exports=api