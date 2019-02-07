const axios = require('axios');
const xlsx = require('node-xlsx');

const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);

const sheet = workSheetsFromFile[0]; // sheet

const rows = sheet.data;

for (const row of rows) {
  let uri = row[1]; // column with the url of the site
  let url = `http://${uri}`;
  
  axios.get(url)
    .then(() => console.log(`${url} +`) )
    .catch(() => console.log(`${url} -`))
}