# A simple Smith Waterman Aligner

A SmithWaterman aligner application

### How to install

- Clone this project
- Install the packages with: `npm install`
- Start the api with: `npm start`

### How to use

- Request alignment: 
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/ --data '{ 
 "target":"ABC",
  "query":"AB"
}'


### Response
  - score
  - position
  - cigar
  - target_match
  - query_match
  
### References
 - https://www.npmjs.com/package/bioseq
