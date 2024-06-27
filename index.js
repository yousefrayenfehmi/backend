const express=require('express');
const formation=require('./controlleur/formationControlleur')
const router=require("./route/route")
const app=express();
const cors=require("cors")
port=3000;
app.use(cors({
    origin: 'https://www.mathilda-learning.com'
  }));
app.use(router);

app.listen(port,(req,res)=>{

    console.log(`port listen ${port}`);
})