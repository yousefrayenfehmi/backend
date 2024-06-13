const path = require('path');
let dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.connect().then(()=>{
    console.log("sucee");
}).catch(()=>{
    console.log("error");
});
module.exports=pool;