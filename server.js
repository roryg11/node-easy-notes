const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-easy-notes-app')
.then( () => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
})  

app.get('/', (req,res)=> {
    res.json({"message": "welcome to the easy notes application"});
});

require('./app/routes/notes.routes.js')(app);

app.listen(3001, () => {
    console.log("server is listening on port 3001");
});

