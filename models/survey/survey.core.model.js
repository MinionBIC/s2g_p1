const mongoose = require('mongoose');

const SurveyCoreDataSchema = new mongoose.Schema({
    creator_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title : {
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
    start_date : {
        type: Date,
        //default:  Date.now()
    },
    duration : {
        type: Number,
        default: 1
    }
});

const SurveyCoreData = mongoose.model('SurveyCoreData', SurveyCoreDataSchema);

module.exports = SurveyCoreData;

module.exports.newData = function(newData, callback) {
    newData.save(callback);
}

module.exports.getAllData = async function() {
    return await SurveyCoreData.find({});
}

module.exports.getDataById = async function(value){
    return await SurveyCoreData.exists({ _id : value});
}

module.exports.getDataByUser = async function(creator) {
    return await SurveyCoreData.find({creator_id: creator});
}

module.exports.getDataByOthers = async function(user) {
    return await SurveyCoreData.find({creator_id: {$not: { $eq:user}}});
}