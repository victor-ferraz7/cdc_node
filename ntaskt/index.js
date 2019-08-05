const express = require('express');
const consign = require('consign');
const app = express();

let port = 3000;

app.set("json spaces", 4);

consign().include('models')         
         .then('libs/middlewares.js')
         .then('routes')
         .then('libs/boot.js')
         .into(app);