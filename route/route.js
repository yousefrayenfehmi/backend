const express=require('express')
const router=express.Router();
const  formation=require('../controlleur/formationControlleur')
router.get('/formation',formation.formation)



module.exports=router;
