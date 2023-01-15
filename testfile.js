//const fs = require('fs');
import got from 'got'
import jsdom from 'jsdom'
//const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vgmUrl= 'http://books.toscrape.com/';

got(vgmUrl).then(response => {
  const dom = new JSDOM(response.body);
  [...dom.window.document.querySelectorAll('h3 a')].forEach(x => {
    console.log(x.getAttribute('title'))
  })
}).catch(console.error)