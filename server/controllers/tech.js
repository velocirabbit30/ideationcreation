const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');

const techController = {
  parseHtml: (html) => {
    const $ = cheerio.load(html);
    // const node = $('#main');
    const div = $('.kCrYT');
    // const links = $('.BNeawe.s3v9rd');
    // const googleLinkDiv = $('.g');
    // // .ZINbbc.xpd.O9g5cc.uUPGi
    // let def;
    // let linksArr = '';
    // node.each((idx, el) => {
    //   // const linksEl = $(el).find(googleLinkDiv);
    //   // linksArr+= linksEl.html();
    //   // console.log('links element: ', linksEl.html());
    // })
    let links = [];
    // console.log(div.text());
    div.each((idx, el) => {
      const aEl = $(el).children('a').attr('href');
      if (aEl !== undefined) {
        let sanitized = aEl.replace(/(\/url\?q=)|&.*/gi, '');
        // console.log(sanitized);
        links.push(sanitized);
      };
    })
    // let definition = div.text().slice(0, 250) +'...';
    let definition = div.text().replace(/\..*|\n.*/g, '');
    console.log(definition);
    // links.each((index, element) => {
    //   const linkEl = $(element).html();
    //   // console.log('links element: ', linkEl);
    //   // linksArr.push(linkEl)
    //   linksArr += linkEl;
    // })
    // fs.writeFileSync('./cheerio.html', node);
    // fs.writeFileSync('./cheerio1.html', divs);
    return {
      links, 
      definition
    }
  },
  getResources: (req, res, next) => {
    const techName = req.body.techName;
    fetch(`https://www.google.com/search?q=definition+${techName}&oq=definition+${techName}&aqs=chrome..69i57j0l5.5927j1j7&sourceid=chrome&ie=UTF-8`)
    .then(res => res.text())
    .then(body =>{
      if (body) {
        const resources = techController.parseHtml(body);
        res.locals.resources = resources;
        next();
      }
      else res.status(400).json({error: 'there was some error getting an html page'});
    });
  }
}

module.exports = techController;