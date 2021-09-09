function align(target, query){
    const bioseq = require("bioseq");
    var rst = bioseq.align(target, query);
    var fmt = bioseq.cigar2gaps(target, query, rst.position, rst.CIGAR);
    const result = {"score":rst.score, "position":rst.position, "CIGAR":bioseq.cigar2str(rst.CIGAR), "target_match":fmt[0], "query_match":fmt[1]}
    return result
}

const express = require('express');
const app = express();
const port = 3000
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
        const result = align(target, query)
        res.json(result)  
    } else {
        res.status(500).json(`Error: undefined`)
    }
});

app.listen(port, () => {
    console.log(`Aligner app listening at http://localhost:${port}`)
  })