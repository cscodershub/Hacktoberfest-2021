const mongoose = require('mongoose')

const mongodbUrl = process.env.MONGODB_URL

mongoose.connect(mongodbUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

.then(() => {
    console.log('Database is connected')
})
.catch(error => {
  console.log(error)
})