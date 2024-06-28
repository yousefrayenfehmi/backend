const express=require('express');
let dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const formation=require('./controlleur/formationControlleur')
const router=require("./route/route")
const app=express();
const cors=require("cors")
port=3000;
const corsOptions = {
  origin: [process.env.backend_url, process.env.domaine_url],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};


app.use(cors(corsOptions));

app.use(router);

app.listen(port,(req,res)=>{

    console.log(`port listen ${port}`);
})