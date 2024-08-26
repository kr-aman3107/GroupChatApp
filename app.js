const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

const loginRoutes = require('./routes/login');
const sendRoutes = require('./routes/send');

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(loginRoutes);
app.use(sendRoutes);

app.use((req,res) =>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);