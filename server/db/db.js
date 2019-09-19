const {Pool} = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const connectionString = process.env.DB_URL;

const pool = new Pool({
  connectionString
})
// const dbQueries = fs.readFileSync(path.resolve(__dirname, 'projqueries.psql')).toString();
// pool.query(dbQueries, (err, res) => {
//   if (err) console.log(err);
//   else console.log('successfully added queries');
// });

module.exports = {
  query: function(query, args, cb) {
    pool.query(query, args, cb);
  },
  end: function() {
    pool.end(() => console.log('disconnected from pool'));
  } 
}