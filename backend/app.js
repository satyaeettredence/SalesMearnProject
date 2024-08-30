const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH");
// })

// app.use('/api/getSales', )

app.get('/sales', (req, res) => {
  const data = [
    {x:1, y: 90},
    {x: 2, y: 12},
    {x: 3, y: 34},
    {x: 4, y: 53},
    {x: 5, y: 98},
  ]
    res.send(data);
  });

  module.exports = app;