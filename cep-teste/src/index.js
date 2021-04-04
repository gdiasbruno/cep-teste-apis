const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cepPromise = require('cep-promise');

const app = express();

app.get("/", async (request, response) => {

  const CEPs = []

  fs.createReadStream('dataCSV.csv')
  .pipe(csv())
  .on('data', (row) => {
    CEPs.push(row.CEP)
  })
  .on('end', async () => {

    let addresses = [];


    for (let index = 0; index < CEPs.length; index++) {
      const cep = CEPs[index]


      cepPromise(cep)
        .then((address) => {
          addresses.push(address)
        }).catch((error) => {console.log(error)})
     
      }
      
    const addressesResponse = addresses;
     
    return response.send(addressesResponse);
  });
  
        
})

app.listen(9333);