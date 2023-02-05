const express = require('express');
const Router = express.Router();

const { subscribe } = require('rxjs');

const UserCore = require('../../models/user/user.core.model');

Router.get('/', (req, res) => {
    res.send('User route found');
})

Router.post('/userCheck', (req, res) => {
    let doc = UserCore.checkByEmail(req.body.email);
    doc.then((e) => 
    {
        console.log(e); 
        if(e == null){
            res.send('not found');
        }
        else {
            res.send('found')
        }
    });

    // if(doc == null) { res.send('not found')}
    // else {
    //         res.send('success') }
})

Router.post('/new', (req,res) => {    


    let doc = UserCore.checkByEmail(req.body.email);
    doc.then((e) => 
    {
        //console.log(e); 
        if(e != null){
            res.json({success: false, msg: 'Failed to Register User: Email already used'});
        }else {
            let newUser = new UserCore({
                nickname: req.body.name,
                password: req.body.password,
                email: req.body.email
            });  
        
            UserCore.newUser(newUser, (err, user) => {
                if(err) { res.json({success: false, msg: 'Failed to Register User: ' + err}); }
                else 
                {     
                    res.json({success: true, msg: 'User registered'});
                }
            });
        }
    });

   
      
})

module.exports = Router;