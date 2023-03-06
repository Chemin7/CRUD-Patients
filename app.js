const express = require('express')
const path = require('path');
const app = express()

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

const session = require('express-session')
app.use(session({secret: 'My_Secret_Key', resave: false, saveUninitialized: false}))



const patientsRouter = require('./routes/patients');
app.use('/patients',  patientsRouter)


app.listen(3000)