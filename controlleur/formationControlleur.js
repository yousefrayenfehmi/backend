const { result } = require("../connection/connection")
const Formation=require("../modele/formation")
class formationcontrolleur{
        static formation=async(req,res)=>{

            const result=await Formation.getalluser();
            if(result){
                res.json(result); 

            }
        }

}
module.exports=formationcontrolleur;
