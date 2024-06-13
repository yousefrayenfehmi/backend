const pgp = require('pg-promise')();
const path = require('path');
let dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log(dotenv);
const db = pgp({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD, 
    port: process.env.PGPORT
});

db.connect().then(()=>{
    console.log("sucee");
}).catch(()=>{
    console.log("error");
});

module.exports=db;