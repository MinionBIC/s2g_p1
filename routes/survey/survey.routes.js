const express = require('express');
const Router = express.Router();

const SurveyCoreData = require('../../models/survey/survey.core.model');

Router.post('/new', (req , res) => {

    let newSurvey = new SurveyCoreData({
        creator_id : req.body.creator,
        title: req.body.title,
        created_at: Date.now(),
        start_date: Date.now()
    });

    SurveyCoreData.newData(newSurvey, (err, e) => {
        if(err) {
            res.json({success: false, msg: "survey creation failed"});
        }
        
        res.json({success: true, msg: "survey created"});

    });

});

Router.get('/all', (req, res) => {
    SurveyCoreData.getAllData().then((e) => {
        res.json(e);
    })
})

Router.get('/my/:id', (req, res) => {

    let creator = req.params.id;

    SurveyCoreData.getDataByUser(creator).then((e) => {
        res.json(e);
    })
})

Router.get('/others/:id', (req, res) => {

    let creator = req.params.id;

    SurveyCoreData.getDataByOthers(creator).then((e) => {
        res.json(e);
    })
})

module.exports = Router;