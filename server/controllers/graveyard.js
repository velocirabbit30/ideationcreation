// const {query} = '../db/db.js';

// module.exports = {
//   addGraveyard: function (req, res, next) {
//     const {name, description, technologies, projecttype} = req.body;
//     console.table(req.body);
//     const queryString = 'insert into graveyard (name, description, technologies, projecttype) values ($1, $2, $3, $4)'
//     query(queryString, [name, description, technologies, projecttype], (err, result) => {
//       if (err) return res.status(500).json({error: 'there was an error adding a new graveyard entry'});
//        return next();
//     })
//   },
//   getGraveyard: function (req, res, next) {
//     const queryString = 'select * from graveyard';
//     query(queryString, (err, result) => {
//       if (err) return res.status(500).json({error: 'there was an error getting the graveyard'});
//       if (result.rows.length > 0) {
//         res.locals.graveyard = result.rows;
//         return next();
//       }
//       else return res.status(500).json({error: 'there are no entries in the graveyard... do my bidding and kill some more projects'});
//     })
//   }
// }