const express = require('express');
const Router = express.Router();

const FeedbackCoreData = require('../../models/feedback/feedback.core.model');

Router.post('/new', (req, res) => {

    let feedback = new FeedbackCoreData({
        creator_id : req.body.creator,
        title: req.body.title,
        location: req.body.location,
        created_at: Date.now(),
        category: req.body.category,
        description: req.body.description
    });

    FeedbackCoreData.newData(feedback, (err, ticket)=> {
        if(err) {
            res.json({success: false, msg: "feedback creation failed"});
        } else {
            res.json({success: true, msg: "feedback created"});
        }
        
       
    })
})

Router.get('/all', (req,res) => {
    FeedbackCoreData.getAllData().then((e) => {
        res.json(e);
    })
})

module.exports = Router;