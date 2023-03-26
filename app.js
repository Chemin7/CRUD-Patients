const express = require('express')
const path = require('path');
const app = express()
const passport = require('passport');
const flash = require('express-flash');
const axios = require('axios')
const moment = require('moment')
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set('views', 'views');

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use(flash());

const session = require('express-session')
app.use(session({secret: 'My_Secret_Key', resave: false, saveUninitialized: false}))

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')
const patientsRouter = require('./routes/patients');
app.use('/patients',  patientsRouter)

const usersRouter = require('./routes/user');
app.use('/',usersRouter)

app.listen(3000)