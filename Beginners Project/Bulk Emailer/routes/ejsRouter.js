const express = require('express');
const router = require('express').Router();
const {newEmailpage,createUserEmail} = require("../controllers/emailer")


router.route('/')
     .get(function(req,res){
    res.redirect('/api/v1/emails');
     })

     router.route('/api/newPage').get(newEmailpage)
     .post(createUserEmail)

     module.exports = router;