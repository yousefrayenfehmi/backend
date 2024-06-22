const express=require('express')
const router=express.Router();
const  formation=require('../controlleur/formationControlleur')
router.get('/formation',formation.formation)
router.get('/formationid/:id',formation.formationbyid)


module.exports=router;
