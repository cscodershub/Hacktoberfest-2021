const express = require('express');
const nodemailer = require('nodemailer');
const ErrorResponse = require('../utils/errorResponse');


exports.sender=(user,password,sendingList,file,path,subject,content)=>{

    var sender = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: password
        }
    });
    
    var mail = {
        from: `"RAJ KUNWAR SINGH " ${process.env.USER}`,
        bcc:sendingList,
        subject: subject,
    html:
    `${content}<br><br><img src="cid:uniq-mailInline" alt="inline_image"/>`,
    attachments: [
            {
                filename: file.name,
                path:path,
                cid: `uniq-mailInline`
            }
        ],
        pool:true,
        maxConnections:500,
        maxMessage:1000
    };
    let m = 0 ;
    sender.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error);
            return new ErrorResponse(`${error.message},400`)
        } else {
            console.log('Email sent successfully: '
                    + info.response);
                m = 1;


                   
        }
    });
    
        sender.close();

        return 1;
}

