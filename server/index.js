const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authBaseURL = '/api/auth';
const propsBaseURL = '/api/properties';
const path = require('path');
const ac = require('./controllers/auth_controller');
const pc = require('./controllers/props_controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "client", "build")));  
app.get("/", (req, res) => {  
 res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.post(`${authBaseURL}/login`, ac.login);
app.post(`${authBaseURL}/register`, ac.register);
app.post(`${authBaseURL}/logout`, ac.logout);

app.post(`${propsBaseURL}/properties`, pc.postProperties);
app.get(`${propsBaseURL}/properties`, pc.getProperties);
app.delete(`${props.baseURL}/properties`, pc.deleteProperties);

const port = 3000;
app.listen(port, () => {console.log(`Server magic is happening on port ${port}`);});