const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const authBaseURL = '/api/auth';
const propsBaseURL = '/api/properties';
const path = require('path');
const ac = require('./controllers/auth_controller');
const pc = require('./controllers/props_controller');
require('dotenv').config();

const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use( checkForSession );

app.use(express.static(path.resolve(__dirname, "../client", "../build")));  
app.get("/", (req, res) => {  
 res.sendFile(path.resolve(__dirname, "../client", "../build", "index.html"));
});

massive(process.env.CONNECTION_STRING).then(dbInstance => {app.set('db', dbInstance)});
app.use(cors());
app.post(`${authBaseURL}/login`, ac.login);
app.post(`${authBaseURL}/register`, ac.register);
app.post(`${authBaseURL}/logout`, ac.logout);

app.post(`${propsBaseURL}`, pc.postProperties);
app.get(`${propsBaseURL}`, pc.getProperties);
app.delete(`${propsBaseURL}/:id`, pc.deleteProperties);

const port = 3001;
app.listen(port, () => {console.log(`Server magic is happening on port ${port}`);});