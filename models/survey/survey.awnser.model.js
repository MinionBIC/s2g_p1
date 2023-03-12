const mongoose = require('mongoose');

const SurveyAwnserDataSchema = new mongoose.Schema({
    survey_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    creator_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    awnser : {
        type: JSON,        
        required: true
    },
    created_at : {
        type: Date,
        //default:  Date.now()
    }
});

const SurveyAwnserData = mongoose.model('SurveyAwnserData', SurveyAwnserDataSchema);

module.exports = SurveyAwnserData;

module.exports.newData = function(newData, callback) {
    newData.save(callback)
}

module.exports.getDataBySurvey = async function(id) {
    return await SurveyAwnserData.find({survey_id: id});
}

module.exports.getDataByUser = async function(id) {
    return await SurveyAwnserData.find({creator_id: id});
}