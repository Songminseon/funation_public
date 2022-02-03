const express = require('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();



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



connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack)
        return;
    }
    console.log("connected as id" + connection.threadId);
});

const searchQuery = (req, res) => {
    connection.query("SELECT * from user", (err, rows) => {
        console.log("good connect");
    })
}

const searchGiveAndTake = (req, res) => {
    connection.query("SELECT sum(transaction_money) as money FROM donation_transaction where transaction_thing > -1 and transaction_thing < 126", (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({ money: rows[0] })
        }
    })
}


const searchAllDonation = (req,res) => {
    connection.query("SELECT sum(transaction_money) as money FROM donation_transaction", (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json({
                money:rows[0]
            })
        }
    })
}


const searchPossibleThing = (req, res) => {
    var category = req.params.category;

    if (category === 'done') {
        connection.query("SELECT * FROM donation_thing WHERE thing_status = 2", (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json({ product: rows })
            }
        })
    }
    else if (category === 'doing') {
        connection.query("SELECT * FROM donation_thing WHERE thing_status = 1", (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json({ product: rows })
            }
        })
    }
    else { //전체조회
        connection.query("SELECT * FROM donation_thing WHERE thing_status = 1 or thing_status=2 ORDER BY thing_status, set_index", (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json({ product: rows })
            }
        })
    }
}

const searchDoneThing = (req, res) => {
    connection.query("SELECT * FROM donation_thing WHERE thing_target_money <= thing_crowd_money", (err, rows) => {
        if (rows.length === 0) {
            res.json({})
        }
        else {
            res.json({ product: rows })
        }
    })
}

const searchZzimThing = (req, res) => {
    if(req.user){
        connection.query("SELECT * FROM zzim_list JOIN donation_thing ON zzim_list.thing_index=donation_thing.thing_index WHERE zzim_list.user_id = ?",
            [req.user.snsId], function (err, rows) {
                if (err) {
                    console.log(err)
                } else {
                    res.json({ product: rows })
                }
            })
        }
    else{
        res.json({
            product:[]
        })
    }
}


const isLogin = (req, res) => { //check user is login. If not need login
    if (!req.user) {
        res.json({
            "status": false,
            "agree": false
        })
    }
    else {
        connection.query("SELECT user_terms FROM users WHERE snsId = ?", [req.user.snsId], (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json({
                    "status": true,
                    "agree": rows[0].user_terms
                })
            }
        })

    }
}



const searchMyDonationDid = (req, res) => {
    var thing_category = req.params.thing_category;
    var subCategory = req.params.subCategory;

    if (req.user) {
        if(thing_category === "giveandtake"){
            if(subCategory==="doing"){
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and thing_index > 0 and thing_index < 126 and thing_status = 1 ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            else if(subCategory==="done"){
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and thing_index > 0 and thing_index < 126 and thing_status = 2 ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            else {
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and thing_index > 0 and thing_index < 126 ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            }
        else if (thing_category === "gabang"){
            if(subCategory==="doing"){
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and thing_index > 125 and thing_status=3 ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            else if(subCategory==="done"){
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and thing_index > 125 and thing_status=4 ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            else {
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and thing_index > 125 ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
        }
        else{
            if(subCategory==="doing"){
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? and (thing_status = 3 or thing_status = 1) ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            else if(subCategory==="done"){
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ?  and (thing_status = 4 or thing_status=2) ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
            else {
                connection.query("SELECT thing_index, thing_status, transaction_money, transaction_index ,date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, thing_name, thing_description ,set_index, thing_status, thing_img_name, thing_crowd_money, thing_target_money, order_id, brand FROM donation_transaction LEFT JOIN donation_thing ON donation_transaction.transaction_thing = donation_thing.thing_index LEFT JOIN users ON donation_transaction.user_id = users.snsId where users.snsId = ? ORDER BY date_format DESC",
                    [req.user.snsId], function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                product: rows,

                            })
                        }
                    })
            }
        }
    }
    else {
        res.json({
            product:[]
        });
    }
}

const searchSliderImg = function (req, res) {
        connection.query("SELECT * FROM slider_img where thing_index = ?", req.params.id, function (err, rows) {
            if (err) {
                console.log(err)
            } else {
                res.json({
                    img_resource: rows
                })
            }
        })
}

const searchAlarm = function (req, res) {
    if(req.user){
        connection.query("SELECT *, date_format(alarm_date, '%Y.%m.%d') as date_format FROM user_alarm WHERE user_id = ? ORDER BY readOrNot, alarm_date DESC",
            [req.user.snsId], function (err, rows) {
                if (err) {
                    console.log(err)
                }
                else {
                    if (rows.length !== 0) {
                        res.json({
                            contents: rows,

                        })
                    }
                    else {
                        res.json({
                            contents: null
                        })
                    }
                }
            })
        }
    else{
        res.json({
            contents:null
        })
    }
}

const searchAlarmCount = function (req, res) {
    if(req.user){
        connection.query("SELECT count(*) as count FROM user_alarm where readOrNot=0 and user_id=?", [req.user.snsId], function (err, rows) {
            if (err) {
                console.log(err);
            }
            else {
                res.json({
                    count: rows[0].count
                });
            }
        })
    }
    else{
        res.json({
            count:0
        })
    }
}

const searchMyDonation = function (req, res) { //어떤 물품에 대한 사용자 과거 도네 기록 조회
    if(req.user){
    var thing_index = req.params.thing_index
    connection.query("SELECT * FROM donation_transaction where user_id = ? and transaction_thing = ?",
        [req.user.snsId, thing_index], function (err, rows) {
            if (err) {
                console.log(err)
            }
            else {
                var myDonation = 0
                for (var i in rows) {
                    myDonation += rows[i].transaction_money
                }
                var totalCoin = myDonation / 100
                res.json({ coin: totalCoin });
            }
        })
    }
    else{
        res.json({
            coin:0,
        })
    }
}

const searchCurrentWallet = function (req, res) {
    if(req.user){
    connection.query("SELECT wallet FROM users WHERE snsId = ?", [req.user.snsId], function (err, rows) {
        if (err) {
            console.log(err)
        }
        else {
            res.json({ wallet: rows[0].wallet })
        }
        })
    }
    else{
        res.json({
            wallet:0
        })
    }
}

const searchMyRecords = function (req, res) {
    var reqUser = req.user.snsId;
    connection.query("SELECT wallet_money, wallet_date, description,transaction_id as thing_img_name FROM wallet_transaction WHERE user_id = ? UNION SELECT transaction_money, transaction_date, thing_description, thing_img_name FROM donation_transaction JOIN donation_thing where donation_transaction.transaction_thing = donation_thing.thing_index and donation_transaction.user_id = ? ORDER BY wallet_date DESC",
        [reqUser, reqUser], function (err, rows) {
            if (err) {
                console.log(err)
            }
            else {
                if (rows.length !== 0) {
                    res.json({ records: rows })
                }
                else {
                    res.json({ records: null })
                }
            }
        })
}

const searchSetPackage = function (req, res) {
    var thing_index = req.params.thing_index;
    connection.query("SELECT * FROM modal_thing WHERE thing_index = ?", [thing_index], function (err, rows) {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                resource: rows
            })
        }
    })
}

const searchRecordByOrderNumber = function (req, res) {
    var user_id = req.user.snsId;
    var order_number = req.params.order_number;

    connection.query("SELECT transaction_index, thing_status, thing_name, date_format(transaction_date, '%Y.%m.%d %H:%i:%s') as date_format, transaction_money, thing_description FROM donation_transaction JOIN donation_thing WHERE donation_transaction.transaction_thing = donation_thing.thing_index and user_id = ? and order_id = ?",
        [user_id, order_number], function (err, rows) {
            if (err) {
                console.log(err)
            }
            else {
                res.json({
                    resource: rows
                })
            }
        })
}

const amILucky = function (req, res) {
    var thing_index = req.params.thing_index;
    if(req.user){
    connection.query("SELECT * FROM donation_transaction JOIN result WHERE donation_transaction.transaction_thing = result.result_thing_index and result_thing_index = ? and donation_transaction.user_id = ?",
        [thing_index, req.user.snsId], function (err, rows) {
            if (err) {
                console.log(err)
            }
            else {
                if (rows.length === 0) { //참여 안한거
                    res.json({
                        status: null
                    })
                }
                else {  //데이터가 존재
                    if (rows[0].result_winner === req.user.snsId) {
                        res.json({
                            status: "product"
                        })
                    }
                    else if (rows[0].result_goods1 === req.user.snsId || rows[0].result_goods2 === req.user.snsId) {
                        res.json({
                            status: "goods"
                        })
                    }
                    else {
                        res.json({
                            status: "donation"
                        })
                    }
                }

            }
        })
    }
    else{
        res.json({
            status:null
        })
    }
}

const getUserName = (req, res) => {
    if(req.user){
    connection.query("SELECT nick, profile_img FROM users WHERE snsId = ?", [req.user.snsId], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                name: rows[0].nick,
                img:rows[0].profile_img,
            })
        }
    })}
    else{
        res.json({
            name:"funation_guest",
            img:null,
        })
    }
}

const getAdditional = (req, res) => {
    if(req.user){
        connection.query("SELECT phone_number, snsId, email FROM users WHERE snsId = ?", [req.user.snsId], (err,rows)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json({
                    phone_number:rows[0].phone_number,
                    snsId:rows[0].snsId,
                    email:rows[0].email
                })
            }
        })
    }
    else{
        res.json({
            snsId:"",
            phone_number:""
        })
    }
}

const checkZzim = (req, res) => {
    var thing_index = req.params.thing_index;
    if(req.user){
        connection.query("SELECT * FROM zzim_list WHERE thing_index=? and user_id=?", [thing_index, req.user.snsId], (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                if (rows.length === 0) {
                    res.json({
                        isZzim: false,
                    })
                }
                else {
                    res.json({
                        isZzim: true,
                    })
                }
            }
        })
    }
    else{
        res.json({
            isZzim:false
        })    
    }
}

const getAmount = (req, res) => {
    var set_index = req.params.set_index;

    connection.query("SELECT count(*) as total FROM donation_thing WHERE set_index = ? GROUP BY set_index", [set_index], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                total: rows[0].total
            })
        }
    })
}

const getGabang = (req,res)=>{
    const brandName = "가방프로젝트"
    connection.query("SELECT *, rank() over(ORDER BY thing_crowd_money DESC) AS ranking from donation_thing where brand=? ORDER BY thing_crowd_money DESC", [brandName], (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json({
                info:rows
            })
        }
    })
}

const getRanking = (req, res) => {  //snsId 노출금지
    var thing_index = req.params.thing_index;
    connection.query("SELECT nick, snsId, sum(transaction_money) as total, rank() over(ORDER BY sum(transaction_money) DESC) as ranking from donation_transaction JOIN users where donation_transaction.user_id = users.snsId and donation_transaction.transaction_thing = ? GROUP BY snsId", [thing_index], (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            if(req.user){    
                res.json({
                    info:rows ,
                    private_info:rows.filter(function(e){
                        return(e.snsId===req.user.snsId)
                    })
                })}
            else{
                res.json({
                    info:rows,
                    private_info:"funation_guest"
                })
            }
        }
    })
}

const checkGuest = (req, res) => {
    if(req.user){
        res.json({
            guest:false,
        })
    }
    else{
        res.json({
            guest:true
        })
    }
}

const searchResult = (req, res) => {
    connection.query("SELECT * FROM result WHERE result_boolean = 0", (err, rows)=> {
        if(err){
            console.log(err)
        }
        else{
            res.json({
                data:rows,
            })
        }
    })
}

const searchGabang = (req,res)=>{
    connection.query("SELECT sum(transaction_money) as money FROM donation_transaction WHERE transaction_thing>=126 and transaction_thing<=127", (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json({
                money:rows[0]
            })
        }
    })
}


router.get('/users', searchQuery); //테스트
router.get('/getUserName', getUserName); //사용자 이름얻기
router.get('/searchAllDonation', searchAllDonation); //모든 기록 다 조회
router.get('/searchPossibleThing/:category', searchPossibleThing); //기부가능품목
router.get('/searchDoneThing', searchDoneThing);  //기부완료된거 조회
router.get('/searchZzimThing', searchZzimThing); //찜목록조회
router.get('/isLogin', isLogin); //로그인상태 확인
router.get('/', (req, res) => res.json({ developer: '송민선!!!' }));
router.get('/searchMyDonationDid/:thing_category/:subCategory', searchMyDonationDid); //내가한 기부 조회
router.get('/searchSliderImg/:id', searchSliderImg); //slick이미지 조회
router.get('/searchAlarm', searchAlarm); //알람조회
router.get('/searchMyDonation/:thing_index', searchMyDonation); //어떠한 기부건에 대해 조회
router.get('/searchCurrentWallet', searchCurrentWallet); //현 유저 지갑 조회
router.get('/searchMyRecords', searchMyRecords); //유저 기부, 참여목록 조호;
router.get('/searchSetPackage/:thing_index', searchSetPackage) //패키지 아이템 조회
router.get('/searchAlarmCount', searchAlarmCount) //안읽은 알람갯수 조회
router.get('/searchRecordByOrderNumber/:order_number', searchRecordByOrderNumber)    //주문번호로 인한 조회
router.get('/amILucky/:thing_index', amILucky); 
router.get('/checkZzim/:thing_index', checkZzim);
router.get('/getAmount/:set_index', getAmount);
router.get('/getGabangMain', getGabang);
router.get('/getRanking/:thing_index', getRanking);
router.get('/checkGuest', checkGuest);
router.get('/searchGiveAndTake', searchGiveAndTake)
router.get('/searchResult', searchResult); //결과 조회
router.get('/searchGabang', searchGabang); //가방 기부결과 조회
router.get('/getAdditional', getAdditional);




router.get('/checkUser', (req, res) => { //if user successs to login, send some information
    if (req.user) {
        var reqUserId = req.user.snsId;
        var createTime = req.user.created_at;
        connection.query("SELECT nick ,transaction_money, created_at, profile_img, wallet FROM donation_transaction join users where donation_transaction.user_id = users.snsId and donation_transaction.user_id = ?;", reqUserId, (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                console.log(rows)
                var myDonationMoney = 0
                var signDate = Math.ceil((new Date().getTime() - new Date(createTime).getTime()) / (1000 * 3600 * 24))
                for (var i in rows) {
                    myDonationMoney += rows[i].transaction_money
                }
                res.json({
                    "nick": req.user.nick,
                    "signDate": signDate,
                    "myDonationMoney": myDonationMoney,
                    "myDonationCount": rows.length,
                    "profile_img": req.user.profile_img,
                    "wallet": req.user.wallet,
                    "guest":false,
                })
            }
        })
    }
    else {
        res.json({ "nick": "", "signDate": "0", "donationMoney": "0", "donationCount": "0", "guest":true }) //fail to login
    }
})





module.exports = router;