const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let data = ['First one'];

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
    console.log('body:', req.body);
    const { content } = req.body;
    if(data.length >= 10) {
        res.status(403).send({ error: 'Already contains 10 values' })
    } else {
        data.push(content);
        res.send(data);
    }
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));