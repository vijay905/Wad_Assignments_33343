const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const { connect } = require('mongoose');
 
mongoose.connect(dbConfig.url, {
useNewUrlParser: true }).then(() => {
console.log("Databse Connected Successfully!!"); }).catch(err => { console.log('Could not connect to the database', err); process.exit(); });
app.get('/', (req, res) => { res.send({message: "Hello Crud Node Express"}); });
app.listen(3000, () => { console.log("Server is listening on port 3000"); });

const UserRoute = require('./routes/user') 
app.use('/user',UserRoute)