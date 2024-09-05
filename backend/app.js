const express = require('express');
 const mongoose = require('mongoose')
const Route =  require('./src/routes/Route')
const app = express();


mongoose.connect("mongodb+srv://satyajeet:YnMLt3Gp5ZK9vwoq@cluster1.ky9ci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
  {
  useNewUrlParser : true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected With DB")
})
.catch(() => {
  console.log("Connection failed to DB")
})


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH");
  next();
});

app.use('/api', Route);

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