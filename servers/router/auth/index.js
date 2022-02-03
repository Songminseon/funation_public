const express = require('express');
const passport = require('passport');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({cookie:true});



router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect:'http://localhost:3000/onBoarding',
    
}), (req,res)=>{
    res.redirect('http://localhost:3000');
});

router.get('/csrfToken', csrfProtection, (req,res)=>{
    res.json({csrfToken:req.csrfToken()})
})
module.exports=router;
