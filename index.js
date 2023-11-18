const express = require('express');
const bodyParser = require('body-parser')
const sql = require('mssql')
const app = express();
const port = 5000;
app.use(bodyParser.json());

const config = {   
    username:'sa',
    password:'E9zb3q3340',
    server:'DESKTOP-IFT1517',
    database:'TestDb',
    options:{
        trustedConnection: true,       
        enableArithAbort: true,
    },
};
sql.connect(config)
  .then(() => {
    console.log('Connected to SQL Server');
    // Perform database operations here
  })
  .catch((err) => {
    console.error('Error connecting to SQL Server:', err);
  });
app.get('/',(req,res)=>{
    res.send('Hello this is my first Express Api');
})
app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})