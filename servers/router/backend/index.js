const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const csrf = require('csurf');
const bodyParser = require('body-parser');
const { on } = require('npm');
const csrfProtection = csrf({cookie:true});

var parseForm = bodyParser.urlencoded({extended:false})

if (process.env.NODE_ENV === "development"){
    var connection = mysql.createConnection({ //db connect in aws 
        host: process.env.LOCAL_MYSQL_HOST,
        user: process.env.LOCAL_MYSQL_USER,
        port: process.env.LOCAL_MYSQL_PORT,
        password: process.env.LOCAL_MYSQL_PASSWORD,
        database: process.env.LOCAL_MYSQL_DATABASE,
    })
}
else if (process.env.NODE_ENV==="test"){
        connection = mysql.createConnection({ //db connect in aws 
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



var zzim = function (req, res) {
    if(req.user){
    var index = req.body.index;
    connection.query("SELECT * FROM zzim_list where user_id = ? and thing_index = ?", [req.user.snsId, index], function (err, rows) {
        
        if (rows.length!==0) {
            connection.query("DELETE FROM zzim_list where user_id = ? and thing_index = ?", [req.user.snsId, index], function (err, rows) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.redirect("/giveAndTake")
                }
            })
        } else {

            connection.query("INSERT INTO zzim_list values (?, ?)", [req.user.snsId, index], function (err, rows) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.redirect("/giveAndTake")
                }
            })
        }
    })
    }
    else{
        res.redirect("/giveAndTake")
    }
}

const suggestion = function(req, res){
    var body = req.body.content;
    var link = req.body.link;
    var curr = new Date()
    var utc = curr.getTime()+(curr.getTimezoneOffset()*60*1000)
    var KR_TIME_DIFF = 9*60*60*1000;
    var time = new Date(utc+KR_TIME_DIFF);
    var provider = req.body.category;
    connection.query("INSERT INTO suggestion values (?,?,?,?)", [body,link,time,provider], function(err,rows){
        if(err){
            console.log(err);
        } else{
            res.redirect('/')
        }
    })
}

const readAll = function(req,res){
    if(req.user){
        connection.query("UPDATE user_alarm SET readOrNot=1 where readOrNot=0 and user_id=?", [req.user.snsId], function(err,rows){
            if(err){
                console.log(err)
            }
            else{
                res.redirect("/")
            }
        })
    }
    else{
        res.redirect("/")
    }
}

const userCheck = (req,res) => {
    var checkOne = req.body.agree1
    var checkTwo = req.body.agree2
    var checkThree = req.body.agree3 === "on" ? 1 : 0
    var reqUser = req.user.snsId

    if (checkOne==="on" && checkTwo==="on"){
        connection.query("UPDATE users SET user_terms = 1, user_marketing = ? WHERE snsId = ?", [checkThree, reqUser], (err,rows)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect("/")
            }
        })
    }
    else{
        res.redirect("/")
    }
}

const checkAdmin = (req, res) => {
    connection.query("SELECT level FROM users where snsId=?", [req.user.snsId], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                level: rows[0].level
            })
        }
    })
}

const getSubmitList = (req, res) => {
    connection.query("SELECT submit_index, submit_accountOwner, submit_giv, snsId, date_format(submit_date, '%Y.%m.%d %H:%i:%s') as submit_date, nick, email, phone_number FROM submit JOIN users where users.snsId = submit.submit_snsId and submit_check=0 ORDER BY submit_date", (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                info: rows,
            })
        }
    })
}

const acceptSubmit = (req, res) => {
    var reqWallet = req.body.reqWallet;
    var reqUser = req.body.reqUser;
    var reqIndex = req.body.reqIndex;
    var buttonType = req.body.type;
    var curr = new Date()
    var utc = curr.getTime()+(curr.getTimezoneOffset()*60*1000)
    var KR_TIME_DIFF = 9*60*60*1000;
    var time = new Date(utc+KR_TIME_DIFF);

    console.log(buttonType);

    if (buttonType === "1") { //입금수락
        connection.query("SELECT wallet FROM users WHERE snsId = ?", [reqUser], (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                var currentWallet = rows[0].wallet;
                connection.query("SELECT * FROM submit where submit_index = ?", [reqIndex], (err,rows)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        if(rows[0].submit_check !== 0){
                            res.redirect("/hidden/admin/hatirubi")
                        }
                        else{
                            
                            var walletChange = parseInt(currentWallet) + parseInt(reqWallet);
                            
                            connection.query("UPDATE users SET wallet = ? where snsId = ?", [walletChange, reqUser], (err, rows) => {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    connection.query("UPDATE submit SET submit_check=1 WHERE submit_index = ?", [reqIndex], (err, rows) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            connection.query("INSERT INTO wallet_transaction (user_id, wallet_money, wallet_date, description) values (?,?,?,?)", [reqUser, reqWallet, time, "기브 충전"], (err,rows)=>{
                                                if(err){
                                                    console.log(err)
                                                }
                                                else{
                                                    res.redirect("/hidden/admin/hatirubi")
                                                }
                                            })
                                            
                                        }
                                    })
                                }
                            })
            
                        }
                    }
                })
                
             
            }
        })
    }
    else { //입금 기각
        connection.query("SELECT * from submit where submit_index = ?", [reqIndex], (err,rows)=>{
            if(err){
                console.log(err)
            }  
            else{
                if(rows[0].submit_check !== 0){  //중복체크인경우
                    res.redirect("/hidden/admin/hatirubi")
                }
                else{
                    connection.query("UPDATE submit SET submit_check = 2 where submit_index = ?", [reqIndex], (err,rows)=>{ //중복막기
                        if(err){
                            console.log(err)
                        }
                        else{
                            res.redirect("/hidden/admin/hatirubi")
                        }
                    })   
                }
            }
        })
    }
}

const userWantGabang = (req, res) => {
    const univ = req.body.reqUniv;
    var relation = req.body.answer;
    const otherOption = req.body.otherOption;
    var curr = new Date()
    var utc = curr.getTime()+(curr.getTimezoneOffset()*60*1000)
    var KR_TIME_DIFF = 9*60*60*1000;
    var time = new Date(utc+KR_TIME_DIFF);

    if(relation==="ans6"){
        relation=otherOption;
    }

    connection.query("INSERT INTO gabang_submit (gabang_univ, gabang_relation, gabang_date, gabang_reqUser) values (?,?,?,?)", [univ,relation,time,req.user.snsId], (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{

            if(univ==="결제후"){
                res.sendStatus(204)
            }
            else{
                res.redirect("/gabang")
            }
        }
    })
}

const changeNick = (req, res) => {
    var newNick = req.body.newNick
    connection.query("UPDATE users SET nick = ? WHERE snsId = ?", [newNick, req.user.snsId], (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/")
        }
    })
}

router.get('/checkAdmin', checkAdmin)
router.get('/getSubmitList', getSubmitList)
router.post('/acceptSubmit', acceptSubmit)
router.post('/zzim', zzim);
router.post('/suggestion', parseForm, csrfProtection, suggestion);
router.post('/readAll', parseForm, csrfProtection, readAll);
router.post('/userCheck', csrfProtection, userCheck);
router.post('/userWantGabang', userWantGabang);
router.post('/changeNick', parseForm, csrfProtection, changeNick);

module.exports = router;