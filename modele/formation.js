const db=require('../connection/connection')
class Formation{




  static getalluser=async()=>{

    return new Promise(resolve=>{
            db.query("select * from formations").then(result=>{
                resolve(result)
            }).catch(err=>{
              console.log('majbdch');
            })
  })



    }
    static getuserbyid=async(id)=>{

      return new Promise(resolve=>{
              db.query(`SELECT ch.id_formation, ch.date_deb, ch.date_fin, f.titre
FROM acheter_formation ch
JOIN formations f ON f.id = ch.id_formation
WHERE ch.id_formation = ${id};`).then(result=>{
                  resolve(result)
              }).catch(err=>{
                console.log(err);
                console.log('majbdch');
              })
            
            
            
            })}
  }


module.exports=Formation;