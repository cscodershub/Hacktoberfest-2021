
const express = require('express');
const router = require('express').Router();
const {
    getEmail,
    getEmails,
    deleteEmail,
    createUserEmail,
    sendEmail,
    emailviewa,
    emailview
} = require('../controllers/emailer')


// router setup
router
   .route('/')
   .get(getEmails)
   .post(createUserEmail)
router
   .route('/:golf')
   .get(getEmail)
router
   .route('/sendemail')
   .post(sendEmail)
   .get(getEmail)


       
module.exports=router;