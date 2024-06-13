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
  }


module.exports=Formation;