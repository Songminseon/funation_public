const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy(['/api','/api/searchAllDonation','/api/isLogin',
        '/api/searchPossibleThing/:category','/api/searchDoneThing','/api/checkUser',
        '/auth/kakao','/auth/kakao/callback','/function/zzim',
        '/api/searchZzimThing','/function/suggestion', 'api/searchMyDonationDid/:thing_category/:subCategory',
        '/api/searchSliderImg/:id', '/api/searchAlarm', '/payments/continuePayments',
        '/api/searchMyDonation/:thing_index', '/api/searchCurrentWallet', '/payments/charge',
        '/api/searchMyRecords','/auth/csrfToken', '/api/searchSetPackage/:thing_index',
        '/function/readAll','api/searchAlarmCount','/api/searchRecordByOrderNumber/:order_number',
        '/amILucky/:thing_index','/function/getSubmitList','/function/checkAdmin',
        '/function/acceptSubmit','/api/getUserName','/payments/saveWalletRecords',
        '/function/userCheck', '/api/checkZzim/:thing_index', '/api/getAmount/:set_index',
        '/api/getGabangMain', '/api/getRanking/:thing_index', '/function/userWantGabang', 
        '/payments/continuePaymentsGabang', '/api/checkGuest', '/api/searchGiveAndTake',
        '/function/changeNick', '/api/searchResult', '/api/searchGabang',
        '/api/getAdditional', '/payments/callback', '/payments/iamportCallback',
        '/payments/mobileCallback/:amount'], {
            target:'http://localhost:8080',
            changeOrigin:true
        })
        
    )    
    
}
