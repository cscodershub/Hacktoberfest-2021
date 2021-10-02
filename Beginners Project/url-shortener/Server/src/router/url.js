const { PostUrl } = require('../controller/posturl')
const { getUrl } = require('../controller/geturl')
const express = require('express')

const routerPost = express.Router()
const routerGet = express.Router()

routerPost 
       .route('/')
       .post(PostUrl)

routerGet
        .route('/:shortUrl')
        .get(getUrl)

module.exports= {
       routerPost,
       routerGet
}