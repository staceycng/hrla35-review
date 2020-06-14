const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
// const cors = require('cors');
const path = require('path');
// const router = require('./router.js')
const db = require('../db/index.js')

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

app.get('/pokemon', (req, res) => {
    db.query(`SELECT * FROM poke;`, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(results);
        }
    })
})

app.get('/pokemon/:type', (req, res) => {
    var sql = `select * from poke where pokeType='${req.params.type}';`;
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(results);
        }
    })
})

app.put('/pokemon', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;

    db.query(`update poke set pokeName='${name}' where id=${id};`, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(results);
        }
    })
})

app.delete('/pokemon/:id', (req, res) => {
    let id = req.params.id;
    console.log('id-->', id);
    db.query(`delete from poke where id=${id};`, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(results);
        }
    })

})