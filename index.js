const express=require('express');
let dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const formation=require('./controlleur/formationControlleur')
const router=require("./route/route")
const app=express();
const cors=require("cors")
port=process.env.Port||3000;
app.use(cors())
app.use(router);

app.listen(port,(req,res)=>{

    console.log(`port listen ${port}`);
})