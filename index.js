const express=require('express');
const path = require('path');
let dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const formation=require('./controlleur/formationControlleur')
const router=require("./route/route")
const app=express();
const cors=require("cors")
port=3000;
app.use(cors()); // Permet toutes les requêtes CORS

app.use(router);

app.listen(port,(req,res)=>{

    console.log(`port listen ${port}`);
})