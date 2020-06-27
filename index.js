const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bkkim:@catchstar-byn9b.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() =>  console.log('MongoDb connected'))
.catch(err => console.log(err))

// mongodb+srv://bkkim:<password>@catchstar-byn9b.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))