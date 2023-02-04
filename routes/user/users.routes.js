const express = require('express');
const Router = express.Router();

const UserCore = require('../../models/user/user.core.model');

Router.get('/', (req, res) => {
    res.send('User route found');
})

module.exports = Router;