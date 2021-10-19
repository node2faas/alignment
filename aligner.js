
exports.align = function(target, query) {
    const bioseq = require("bioseq");
    var rst = bioseq.align(target, query);
    var fmt = bioseq.cigar2gaps(target, query, rst.position, rst.CIGAR);
    const result = {"score":rst.score, "position":rst.position, "CIGAR":bioseq.cigar2str(rst.CIGAR), "target_match":fmt[0], "query_match":fmt[1]}
    return result
};