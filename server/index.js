const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
// const cors = require('cors');
const path = require('path');
// const router = require('./router.js')

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))