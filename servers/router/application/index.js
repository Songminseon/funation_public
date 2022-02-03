const express = require('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

if (process.env.NODE_ENV === "developemnt"){
    var connection = mysql.createConnection({
        host:process.env.LOCAL_MYSQL_HOST,
        user:process.env.LOCAL_MYSQL_USER,
        port:process.env.LOCAL_MYSQL_PORT,
        password:process.env.LOCAL_MYSQL_PASSWORD,
        database:process.env.LOCAL_MYSQL_DATABASE,
    })
}

else if (process.env.NODE_ENV==="test"){
    connection = mysql.createConnection({
        host: process.env.TEST_MYSQL_HOST,
        user: process.env.TEST_MYSQL_USER,
        port: process.env.TEST_MYSQL_PORT,
        password: process.env.TEST_MYSQL_PASSWORD,
        database: process.env.TEST_MYSQL_DATABASE,
    })
}
else{
    connection = mysql.createConnection({ //db connect in aws 
    host: process.env.AWS_MYSQL_HOST,
    user: process.env.AWS_MYSQL_USER,
    port: process.env.AWS_MYSQL_PORT,
    password: process.env.AWS_MYSQL_PASSWORD,
    database: process.env.AWS_MYSQL_DATABASE,
    })
}

connection.connect((err)=>{
    if(err){
        console.err("error connecting: " + err.stack)
        return;
    }
    console.log("application BackendOn !!" + connection.threadId);
})

const indexFunc = (req,res) => {
    res.json({
        "testApi":"for application"
    })
}
router.get('/index', indexFunc);

module.exports = router;

