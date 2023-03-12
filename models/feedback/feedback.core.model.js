const mongoose = require('mongoose');

const FeedBackCoreSchema = new mongoose.Schema({
    creator_id:  {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title : {
        type: String,
        default: 'empty',
        required: true
    },
    location: {
        type: String,
        default: 'empty',
        required: true
    },
    created_at : {
        type: Date,
        //default:  Date.now()
    },
    category : {
        type: String,
        default: 'empty'
    },
    description : {
        type: String,
        default: 'empty'
    }
})

const FeedbackCoreData = mongoose.model('FeedbackCoreData', FeedBackCoreSchema);

module.exports = FeedbackCoreData;

module.exports.newData = function(newData, callback) {
    newData.save(callback);
}

module.exports.getAllData = async function() {
    return await FeedbackCoreData.find({});
}