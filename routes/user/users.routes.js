const express = require('express');
const Router = express.Router();

const UserCoreData = require('../../models/user/user.core.model');
const UserPersonData = require('../../models/user/user.person.model');

Router.get('/', (req, res) => {
    res.send('User route found');
})

Router.get('/:id/data', (req, res) => {

    let user_id = req.params.id;

    //console.log(user_id)

    UserPersonData.checkData(user_id).then((e) => {
        //console.log(e);

        UserPersonData.getData(e._id).then((e) => {
            res.json({data: e})
        });        
        
    })
})

Router.post('/userCheck', (req, res) => {
    let doc = UserCoreData.checkByEmail(req.body.email);
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


    let doc = UserCoreData.checkByEmail(req.body.email);
    doc.then((e) => 
    {
        //console.log(e); 
        if(e != null){
            res.json({success: false, msg: 'Failed to Register User: Email already used'});
        }else {
            let newUser = new UserCoreData({
                nickname: req.body.name,
                password: req.body.password,
                email: req.body.email
            });  
        
            UserCoreData.newUser(newUser, (err, user) => {
                if(err) { res.json({success: false, msg: 'Failed to Register User: ' + err}); }
                else 
                {     

                    //console.log(newUser.id)

                    let newData = new UserPersonData({
                        user_id : newUser.id
                    });

                    UserPersonData.newData(newData, (err) => {
                        if(err) console.log(err);
                    })

                    res.json({success: true, msg: 'User registered'});
                }
            });
        }
    });      
})

Router.post('/:id/update', (req, res) => {
    let id = req.params.id;
    let vorname = req.body.newValue;
    let column = req.body.attribut;
    

    UserPersonData.getId(id).then((e) => {

        let condition = {[column]: vorname};

        UserPersonData.findByIdAndUpdate(e, condition , (err, e) => {
            if(err) { res.json({success: false, msg: err})}
            else 
            { 
                UserPersonData.getData(e.id).then((err, e) => {
                    if(err) { res.json({success: false, msg: err})}
                    else { res.json({success:true, msg: e})}
                })
                
            }
        })
    });

})

Router.delete('/:id', (req, res) => {
    UserCoreData.findByIdAndDelete(req.params.id, (err, e) => {
        console.log(e.id);

        UserPersonData.getId(e.id).then((e) => {
            if(err) { res.json({success: false, msg: err})}
            else{
                UserPersonData.findByIdAndDelete(e, (err, e) => {
                    if(err) { res.json({success: false, msg: err}) }
                    else {
                        res.json({success: true, msg: e})
                    }
                })
            }
        })
    })
})

module.exports = Router;