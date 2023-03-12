const mongoose = require('mongoose');

const SurveyCommentDataSchema = new mongoose.Schema({
    survey_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    creator_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    comment : {
        type: String,
        default: 'empty',
        required: true
    },
    created_at : {
        type: Date,
        //default:  Date.now()
    }
});

const SurveyCommentData = mongoose.model('SurveyCommentData', SurveyCommentDataSchema);

module.exports = SurveyCommentData;

module.exports.newData = function(newData, callback) {
    newData.save(callback)
}

module.exports.getDataBySurvey = async function(id) {
    return await SurveyCommentData.find({survey_id: id});
}

module.exports.getDataByUser = async function(id) {
    return await SurveyCommentData.find({creator_id: id});
}