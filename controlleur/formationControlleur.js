const { result } = require("../connection/connection")
const Formation=require("../modele/formation")
class formationcontrolleur{
        static formation=async(req,res)=>{

            const result=await Formation.getalluser();
            if(result){
                res.json(result); 

            }
        }
        static formationbyid=async(req,res)=>{
            const id=req.params.id
            console.log("hhhhhhh: ",id);
            const result=await Formation.getuserbyid(id
                
            );
            if(result){
                res.json(result); 
            }
        }

}
module.exports=formationcontrolleur;
