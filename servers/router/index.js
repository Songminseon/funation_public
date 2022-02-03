const express = require('express')
const app = express()
const router = express.Router()
const api = require('./api/index');
const auth = require('./auth/index');
const backend = require('./backend/index');
const payments = require('./payments/index');
const application = require('./application/index')

router.use('/api', api);
router.use('/auth', auth); // 가입관련
router.use('/function', backend); // 결제 외의 POST 작업
router.use('/payments', payments); // 결제 관련 로직
router.use('/application', application); //rn전용 서버 

module.exports = router;