const express = require('express');

const userRoutes = require('./routes/user/users.routes');

const app = express();

const PORT = 3000;

app.listen(PORT, () => { console.log('Hey Listen: ' + PORT)});