const cheerio = require('cheerio');
const fetch = require('node-fetch');
// const fs = require('fs');
// const {query, end} = require('../db/db'); 

const techController = {
  parseHtml: (html) => {
    const $ = cheerio.load(html);
    const div = $('.kCrYT');
    let links = [];
    div.each((idx, el) => {
      const aEl = $(el).children('a').attr('href');
      if (aEl !== undefined) {
        let sanitized = aEl.replace(/(\/url\?q=|&.*)/gi, '');
        links.push(sanitized);
      };
    })
    let definition = div.text().replace(/\.[^js].*|\n.*/g, '');
    return {
      links, 
      definition
    }
  },
  getResources: (req, res, next) => {
    const techName = req.body.techName;
    fetch(`https://www.google.com/search?sxsrf=ACYBGNTjriXhjDgTEvJpGcFmIKgY6t8xvA%3A1568916002239&ei=IsKDXbOZDtHC-gTQ9qOoCg&q=definition+${techName}+tech&oq=definition+${techName}+tech&gs_l=psy-ab.3...8964.9941..10062...0.5..0.81.752.10......0....1..gws-wiz.......0i71j0i8i7i30j0i8i13i30j0i8i30.eK1Rt-eo6zQ&ved=0ahUKEwizsvvHu93kAhVRoZ4KHVD7CKUQ4dUDCAs&uact=5`)
    .then(res => res.text())
    .then(body =>{
      if (body) {
        const resources = techController.parseHtml(body);
        res.locals.resources = resources;
        // use if we want to add this entries into the db
        // const linksStr = resources.links.join(',');
        // query("insert into tech (name, links, definition) values ($1, $2, $3)", [techName, linksStr, resources.definition], (err, results) => {
        //   if (err) throw new Error();
        //   console.assert(results.fields, results.fields);
        // })
        next();
      }
      else res.status(400).json({error: 'there was some error getting an html page'});
    })
    .catch(err => console.error(`Error in getResources: ${err}`))
  }
}

module.exports = techController;