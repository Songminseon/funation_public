const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()
const csrf = require('csurf');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
    console.log("개발")
    var connection = mysql.createConnection({ //db connect in aws 
        host: process.env.LOCAL_MYSQL_HOST,
        user: process.env.LOCAL_MYSQL_USER,
        port: process.env.LOCAL_MYSQL_PORT,
        password: process.env.LOCAL_MYSQL_PASSWORD,
        database: process.env.LOCAL_MYSQL_DATABASE,
    })
}
else if (process.env.NODE_ENV === "test") {
    console.log("테스트")
    connection = mysql.createConnection({ //db connect in aws 
        host: process.env.TEST_MYSQL_HOST,
        user: process.env.TEST_MYSQL_USER,
        port: process.env.TEST_MYSQL_PORT,
        password: process.env.TEST_MYSQL_PASSWORD,
        database: process.env.TEST_MYSQL_DATABASE,
    })
}
else {
    console.log("배포")
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

router.get("/fail", function (req, res) {
    res.json({
        message: req.query.message,
        code: req.query.code,
    });
});

router.post("/charge", parseForm, csrfProtection, function (req, res) {
    var reqMoney = req.body.reqMoney;
    var reqUser = req.user.snsId;
    var curr = new Date()
    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var time = new Date(utc + KR_TIME_DIFF);
    connection.query("SELECT wallet FROM users where snsId=?", reqUser, function (err, rows) {
        if (err) {
            console.log(err)
        }
        else {
            var currentWallet = rows[0].wallet
            var upDateWallet = currentWallet + reqMoney / 100
            connection.query("UPDATE users SET wallet=? where snsId=? ", [upDateWallet, "reqUser"], function (err, rows) {
                if (err) {
                    console.log(err)
                }
                else {
                    connection.query("INSERT INTO wallet_transaction (user_id, wallet_money, wallet_date) values(?,?,?)", [reqUser, reqMoney, time], function (err, rows) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            res.redirect("/chargeSuccess/")
                        }
                    })

                }
            })
        }
    })
})

const saveWalletRecords = (req, res) => {
    var accountOwner = req.body.reqAccountOwner
    var reqGiv = req.body.reqGiv
    var curr = new Date()
    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var time = new Date(utc + KR_TIME_DIFF);
    connection.query("INSERT INTO submit (submit_snsId, submit_giv, submit_date, submit_accountOwner, submit_check) VALUES (?,?,?,?,?)",
        [req.user.snsId, reqGiv, time, accountOwner, 0], (err, rows) => {
            if (err) {
                console.log(err)
            }
            else {
                if (accountOwner === "") {
                    res.redirect("/fail")
                }
                else {
                    res.redirect("/walletCharge")
                }
            }
        })
}

router.post("/saveWalletRecords", saveWalletRecords)

router.post('/continuePayments', parseForm, csrfProtection, function (req, res) { //결제진행하즈아!!
    var reqMoney = req.body.reqCoin * 100;  //front에서 name지정해줘야함
    var reqUserId = req.user.snsId;
    var reqOrderId = req.body.reqOrderId; //front에서 지정
    var reqSetIndex = req.body.reqSetIndex; //세트번호
    var reqThingIndex = req.body.reqThingIndex;
    var currentWallet = parseInt(req.user.wallet);
    var resCoin = parseInt(currentWallet - req.body.reqCoin);
    var maxCoin = parseInt(req.body.maxCoin);
    var thing_amount = req.body.thing_amount;
    var next_amount = parseInt(thing_amount) + 1
    var thing_name = req.body.thing_name;
    var curr = new Date()
    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var time = new Date(utc + KR_TIME_DIFF);


    if (currentWallet - req.body.reqCoin < 0) { //잔고 부족
        console.log("잔고부족")
        res.redirect('/fail')
    }
    else { //잔고 넉넉함 => 기부물품의 대한 현 상태 조회
        if (reqMoney > maxCoin * 100) { //요청돈이 본인이 참여할 수 있는 최대금액보다 많을 때. 혹시모를 버그 방지
            res.redirect('/fail')
            console.log("참가할 수 있는 금액보다 클때") //오류방지
        }
        else {

            connection.query("SELECT thing_target_money, thing_crowd_money FROM donation_thing where thing_index = ?",
                [reqThingIndex], function (err, rows) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        if (rows.length === 1) { //성공적인 프로세스, 고유index로 접근할 것이기 때문에 길이가 1이어야지... 물품정보 접근

                            if (reqMoney > (rows[0].thing_target_money - rows[0].thing_crowd_money)) { //사용자가 결제한 돈이 남은 돈보다 클경우, 사실상 동시결제를 막기위한 수단
                                res.redirect("/fail") //error 메세지 전달
                            }
                            else {
                                var sumMoney = reqMoney + rows[0].thing_crowd_money  //사용자와 결제과정은 끝났고 이제 db작업
                                var thingStatus = sumMoney === rows[0].thing_target_money ? 2 : 1  //만약 현 기부가 끝나면 새로운 기부를 열어주자..!!
                                if (thingStatus === 2) {
                                    connection.query("UPDATE donation_thing SET thing_status = 2 WHERE thing_index = ? and thing_status = 1", [reqThingIndex], function (err, rows) { //물량확인
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {

                                            connection.query("UPDATE donation_thing SET thing_status = 1 WHERE set_index =? and thing_amount = ?", [reqSetIndex, next_amount], function (err, rows) {
                                                if (err) {
                                                    console.log(err)
                                                }
                                                else {
                                                    connection.query("SELECT user_id, sum(transaction_money) as total from donation_transaction where transaction_thing = ? GROUP BY user_id", [reqThingIndex], function (err, rows) {
                                                        if (err) {
                                                            console.log(err)
                                                        }
                                                        else {
                                                            var chance_list = []
                                                            for (var i in rows) {
                                                                var change = rows[i].total / 100
                                                                for (var j = 0; j < change; j++) {
                                                                    chance_list.push(rows[i].user_id)
                                                                }
                                                            }
                                                            var winner = chance_list[Math.floor(Math.random() * chance_list.length)]  //1등
                                                            var participate_list = Array.from(new Set(chance_list))  //중복제거

                                                            while (true) {
                                                                var goodsFirst = participate_list[Math.floor(Math.random() * participate_list.length)]
                                                                var goodsSecond = participate_list[Math.floor(Math.random() * participate_list.length)]

                                                                if (participate_list.length === 2) { //2명에서 50%냈을때
                                                                    goodsSecond = ""
                                                                    if (winner === goodsFirst) {
                                                                        goodsFirst = participate_list[Math.floor(Math.random() * participate_list.length)]
                                                                    }
                                                                    else {
                                                                        break;
                                                                    }
                                                                }
                                                                else {
                                                                    if (winner === goodsFirst || winner === goodsSecond || goodsFirst === goodsSecond) { //중복당첨시 다시 돌려돌려~
                                                                        if (winner === goodsFirst) { //상품당첨자는 안돼요
                                                                            goodsFirst = participate_list[Math.floor(Math.random() * participate_list.length)]
                                                                        }
                                                                        if (winner === goodsSecond) { //상품당첨자는 안돼요
                                                                            goodsSecond = participate_list[Math.floor(Math.random() * participate_list.length)]
                                                                        }
                                                                        if (goodsFirst === goodsSecond) { //굿즈 응모권2개를 같은 사람이 갖는것도 안돼요
                                                                            goodsSecond = participate_list[Math.floor(Math.random() * participate_list.length)]
                                                                            if (participate_list.length === 2) {
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    else { //아니면 끝!
                                                                        break;
                                                                    }
                                                                }

                                                            }
                                                            connection.query("INSERT INTO result(result_thing_index, result_winner, result_goods1, result_goods2) VALUES(?,?,?,?)", [reqThingIndex, winner, goodsFirst, goodsSecond], function (err, rows) { //1등 ㅊㅊ
                                                                if (err) {
                                                                    console.log(err)
                                                                }
                                                                else {
                                                                    for (var i in participate_list) {
                                                                        connection.query("INSERT INTO user_alarm(user_id, alarm_title, alarm_body, alarm_date) VALUES (?,?,?,?)", [participate_list[i], "기부 참여 제품 100% 달성", thing_name, time],
                                                                            function (err, rows) { //알림발송
                                                                                if (err) {
                                                                                    console.log(err)
                                                                                }
                                                                                else {

                                                                                    return
                                                                                }
                                                                            })

                                                                    }

                                                                }
                                                            })

                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }

                                connection.query("UPDATE donation_thing SET thing_crowd_money = ?, thing_endOrNot=? where thing_index = ?", //db에 있는 진행상태 값과 크라우드 돈 값을 바꿈
                                    [sumMoney, thingStatus, reqThingIndex], function (err, rows) {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {

                                            connection.query("INSERT INTO donation_transaction (user_id, transaction_thing, transaction_money, transaction_date, order_id) values (?,?,?,?,?)", //도네이션 결과 쌓기
                                                [reqUserId, reqThingIndex, reqMoney, time, reqOrderId], function (err, rows) {
                                                    if (err) {
                                                        console.log(err)
                                                    }
                                                    else {
                                                        connection.query("UPDATE users SET wallet = ? where snsId = ?", [resCoin, reqUserId], function (err, rows) {
                                                            if (err) {
                                                                console.log(err)
                                                            }
                                                            else {
                                                                res.redirect(`/success/${req.body.reqOrderId}`) //최종성공
                                                            }
                                                        })

                                                    }
                                                })

                                        }
                                    })

                            }
                        }
                        else {
                            res.redirect("/fail") //error메세지 전달
                        }
                    }
                })
        }
    }
})

router.post('/continuePaymentsGabang', parseForm, csrfProtection, (req, res) => { //가방결제
    var reqMoney = req.body.reqCoin * 100;  //front에서 name지정해줘야함
    var reqUserId = req.user.snsId;
    var reqOrderId = req.body.reqOrderId; //front에서 지정
    var reqThingIndex = req.body.reqThingIndex;
    var currentWallet = parseInt(req.user.wallet);
    var resCoin = parseInt(currentWallet - req.body.reqCoin);
    var maxCoin = parseInt(req.body.maxCoin);
    var curr = new Date()
    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var time = new Date(utc + KR_TIME_DIFF);

    if (currentWallet - req.body.reqCoin < 0) {
        console.log("잔고부족")
        res.redirect('/fail')
    }
    else {
        if (reqMoney > maxCoin * 100) {
            res.redirect("/fail")
            console.log("참가할 수 있는 금액보다 클때")
        }
        else {
            connection.query("SELECT thing_target_money, thing_crowd_money FROM donation_thing where thing_index = ?",
                [reqThingIndex], (err, rows) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        if (rows.length === 1) {
                            if (reqMoney > (rows[0].thing_target_money - rows[0].thing_crowd_money)) { //사용자가 결제한 돈이 남은 돈보다 클경우, 사실상 동시결제를 막기위한 수단
                                res.redirect("/fail") //error 메세지 전달
                            }
                            else {
                                var sumMoney = reqMoney + rows[0].thing_crowd_money
                                var thingStatus = sumMoney === rows[0].thing_target_money ? 4 : 3

                                if (thingStatus === 4) {
                                    connection.query("UPDATE donation_thing SET thing_status = 4 WHERE thing_index = ? and thing_status=3", [reqThingIndex], (err, rows) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                    })
                                }
                                connection.query("UPDATE donation_thing SET thing_crowd_money = ?, thing_endOrNot=? where thing_index=?",
                                    [sumMoney, thingStatus, reqThingIndex], (err, rows) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            connection.query("INSERT INTO donation_transaction (user_id, transaction_thing, transaction_money, transaction_date, order_id) values (?,?,?,?,?)",
                                                [reqUserId, reqThingIndex, reqMoney, time, reqOrderId], (err, rows) => {
                                                    if (err) {
                                                        console.log(err)
                                                    }
                                                    else {
                                                        connection.query("UPDATE users SET wallet = ? where snsId = ?", [resCoin, reqUserId], (err, rows) => {
                                                            if (err) {
                                                                console.log(err)
                                                            }
                                                            else {
                                                                res.redirect(`/successGabang/${req.body.reqOrderId}`)
                                                            }
                                                        })
                                                    }
                                                })
                                        }
                                    })

                            }

                        }
                        else {
                            res.redirect("/fail")
                        }
                    }

                })
        }
    }
})

router.post("/callback", parseForm,  (req, res) => {
    var reqMoney = req.body.reqGiv;
    var reqUser = req.body.snsId;
    var merchant_uid = req.body.merchant_uid
    var curr = new Date()
    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var time = new Date(utc + KR_TIME_DIFF);

    connection.query("INSERT INTO iamport (reqUser, reqTime, reqMoney, merchantId) values(?,?,?,?)", [reqUser, time, reqMoney, merchant_uid], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.sendStatus(204)
        }
    })

})

router.post('/iamportCallback', parseForm, (req, res) => {
    try {
        console.log("webhook")
        const { imp_uid, merchant_uid, status } = req.body;
        if (status === "paid") {
            const getToken = axios({
                url: "https://api.iamport.kr/users/getToken",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    imp_key: process.env.IAMPORT_REST_API,
                    imp_secret: process.env.IAMPORT_API_SECRET
                }
            })
            const { access_token } = getToken.data.response;
            const getPaymentData = axios({
                url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
                method: "GET", // GET method
                headers: { "Authorization": access_token } // 인증 토큰 Authorization header에 추가
            });
            const paymentData = getPaymentData.data.response; // 조회한 결제 정보
            var paymentGiv = paymentData.amount / 110;

            connection.query("SELECT reqUser, reqMoney FROM iamport WHERE merchantId = ?", [merchant_uid], (err, rows) => {
                if (err) {
                    console.log("pont1"+err)
                }
                else {
                    var reqUser = rows[0].reqUser;
                    connection.query("SELECT wallet FROM users WHERE snsId = ?", [reqUser], (err, rows) => {
                        if (err) {
                            console.log("pont2"+err)
                        }
                        else {
                            var currentUserWallet = parseInt(rows[0].wallet + paymentGiv);
                            connection.query("UPDATE users SET wallet = ? WHERE snsId = ?", [currentUserWallet, reqUser], (err, rows) => {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    var curr = new Date()
                                    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
                                    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
                                    var time = new Date(utc + KR_TIME_DIFF);
                                    connection.query("INSERT INTO wallet_transaction (user_id, wallet_money, wallet_date, description) values (?,?,?,?)", [reqUser, paymentGiv, time, "기브 충전"], (err, rows) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            res.sendStatus(204)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
        else {
            res.redirect("/")
        }
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.get("/mobileCallback/:amount", parseForm,  (req, res) => {
    var reqUser = req.user.snsId;
    var { imp_uid, merchant_uid } = req.query;
    var amount = req.params.amount;
    var curr = new Date()
    var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var time = new Date(utc + KR_TIME_DIFF);
 

    connection.query("INSERT INTO iamport (reqUser, reqTime, reqMoney, merchantId) values(?,?,?,?)", [reqUser, time, amount*110, merchant_uid], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect("/")
        }
    })
    // try {
    //     console.log("mbcallback")
    //     var curr = new Date()
    //     var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000)
    //     var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    //     var time = new Date(utc + KR_TIME_DIFF);
    //     const { imp_uid, merchant_uid } = req.query;
        // const getToken = await axios({
        //     url: "https://api.iamport.kr/users/getToken",
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     data: {
        //         imp_key: process.env.IAMPORT_REST_API,
        //         imp_secret: process.env.IAMPORT_API_SECRET
        //     }

        // });

        // const { access_token } = getToken.data.response;
        // const getPaymentData = await axios({
        //     url: `https://api.iamport.kr/payments/${imp_uid}`,
        //     method: "GET",
        //     headers: {
        //         "Authorization": access_token
        //     }
        // })

        // const paymentData = getPaymentData.data.response;
        // const { amount, status } = paymentData;

    //     if (status === "ready" || "paid") {
    //         connection.query("INSERT INTO iamport (reqUser, reqTime, reqMoney, merchantId) values(?,?,?,?)", [req.user.snsId, time, amount, merchant_uid], (err, rows) => {
    //             if (err) {
    //                 console.log(err)
    //             }
    //             else {
    //                     res.redirect("/")
    //                 // connection.query("SELECT reqUser, reqMoney FROM iamport where mercahntId = ?", [merchant_uid], (err, rows) => {
    //                 //     if (err) {
    //                 //         console.log(err)
    //                 //     }
    //                 //     else {
    //                 //         var userIam = rows[0].reqUser
    //                 //         var checkMoney = rows[0].checkMoney
    //                 //         if (status === "paid") {
    //                 //             if(checkMoney===amount){
    //                 //                 connection.query("SELECT wallet FROM users WHERE snsId = ?", [userIam], (err, rows) => {
    //                 //                     if (err) {
    //                 //                         console.log(err)
    //                 //                     }
    //                 //                     else {
    //                 //                         var userChangeWallet = parseInt(rows[0].wallet + amount / 110);
    //                 //                         connection.query("UPDATE users SET wallet = ? WHERE snsId = ?", [userChangeWallet, userIam], (err, rows) => {
    //                 //                             if (err) {
    //                 //                                 console.log(err)
    //                 //                             }
    //                 //                             else {
    //                 //                                 connection.query("INSERT INTO wallet_transaction (user_id, wallet_money, wallet_date, description) values (?,?,?,?)", [req.user.snsId, amount / 110, time, "기브 충전"], (err, rows) => {
    //                 //                                     if (err) {
    //                 //                                         console.log(err)
    //                 //                                     }
    //                 //                                     else{
    //                 //                                         res.redirect("https://do.funation.io")
    //                 //                                     }
    //                 //                                 })
    //                 //                             }
    //                 //                         })
    //                 //                     }
    //                 //                 })
    //                 //             }
    //                 //             else{
    //                 //                 res.sendStatus(400) //위조공격
    //                 //             }
    //                 //         }
                            
    //                 //     }
    //                 // })

    //             }
    //         })
    //     }
    //     else {
    //         res.status(400) //위조된 공격
    //     }

    // }
    // catch (e) {
    //     res.status(400).send(e);
    // }
})

module.exports = router;
