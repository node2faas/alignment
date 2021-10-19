const express = require('express');
const app = express();
const port = 3000
const aligner = require('./aligner');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    const bd = req.body
    let target = (bd && bd.target) ? bd.target.toString() : null
    let query = (bd && bd.query) ? bd.query.toString() : null
    if (bd && query && target){
        const result = aligner.align(target, query)
        res.json(result)  
    } else {
        res.status(500).json(`Error: undefined`)
    }
});

app.listen(port, () => {
    console.log(`Aligner app listening at http://localhost:${port}`)
  })