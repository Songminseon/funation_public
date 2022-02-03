const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('cookie-session');
const dotenv = require('dotenv');
const port = process.env.PORT || 8080;
const router = require('./router/index');
const passport = require('passport');
const {sequelize} = require('./models');
const passportConfig = require('./router/passport');
// const logger = require('./logger');
const helmet = require('helmet');
const hpp = require('hpp');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));

const sessionOption = {
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
};

if (process.env.NODE_ENV==="production"){
    sessionOption.proxy=true;
}

app.use(session(sessionOption));


app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.use(express.static('dist'))

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, "../dist/index.html"));
})

sequelize.sync({force:false})
    .then(()=>{
        console.log("db connect")
    })
    .catch((err)=>{
        console.log(err);
    });



app.listen(port, ()=>{
    console.log('Funation BackEnd server is on!!!');
    console.log(path.join(__dirname, "../dist"));
})

dotenv.config();
passportConfig();

if(process.env.NODE_ENV === 'production') {
    app.use(morgan('combined')); //record more records related to user experience
    app.use(helmet());
    app.use(hpp());
} else {
    app.use(morgan('dev')); //development mode
}


// app.use((req,res,next)=>{
//     const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
//     error.status = 404;
//     logger.info('error!!');
//     logger.error(error.message)
//     next(error);
// })
