const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.json');
const fs = require('fs');

const data = db.rows;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.json(data));

app.post('/', (req, res) => {
    const { content } = req.body;
    if(data.length < 10) {
      data.push(content);
      res.send(data);

      fs.writeFile('./server/db.json', JSON.stringify({ rows: data }), function(error) {
        if (error) return console.log(error);
      })
    } else {
      res.status(403).send({ error: 'Already contains 10 values' })
    }
});

app.listen(3001, () => console.log('Example app listening on port 3001'));