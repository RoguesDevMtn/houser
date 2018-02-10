const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authBaseURL = '/api/auth';
const propsBaseURL = '/api/properties';
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "client", "build")));  
app.get("/", (req, res) => {  
 res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = 3000;
app.listen(port, () => {console.log(`Server magic is happening on port ${port}`);});