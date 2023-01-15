//const fs = require('fs');
import got from 'got'
import jsdom from 'jsdom'
//const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vgmUrl= 'https://www.vgmusic.com/music/console/nintendo/nes';

got(vgmUrl).then(response => {
  const dom = new JSDOM(response.body);
  console.log(dom.window.document.querySelector('title').textContent);
}).catch(console.error)