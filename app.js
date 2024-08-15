const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const loginRoutes = require('./routes/login');
const sendRoutes = require('./routes/send');

app.use(bodyParser.urlencoded({extended : false}));

app.use(loginRoutes);
app.use(sendRoutes);

app.use((req,res) =>{
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000);