const mongoose = require('mongoose');

const SurveyContentDataSchema = new mongoose.Schema({
    survey_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        default: 'empty',
        required: true
    },
    type : {
        type: String,
        default: 'empty',
        required: true
    }
})

const SurveyContentData = mongoose.model('SurveyContentData', SurveyContentDataSchema)

module.exports = SurveyContentData;

module.exports.newData = function(newData, callback) {
    newData.save(callback);
}

module.exports.getContentBySurveyID = async function(id) {
    return await SurveyContentData.find({survey_id : id});
}