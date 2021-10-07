const express = require('express')
const path = require('path')
const cors = require('cors')

require('./db/db')

const app = express()
const port = process.env.PORT 

const { routerPost, routerGet } = require('./src/router/url')

app.use(express.json())
app.use(cors())

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectory, '/html/index.html'))
})

app.use('/v1/enterurl', routerPost)
app.use('/', routerGet)

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Url-Shortener',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})