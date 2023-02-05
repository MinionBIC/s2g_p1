const mongoose = require('mongoose');
const { async } = require('rxjs');

const UserPersonDataSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    vorname : {
        type: String,
        default: 'empty'
    },
    nachname : {
        type: String,
        default: 'empty'
    },
    alter : {
        type: Number,
        default: 0
    }
});

const UserPersonData = mongoose.model('UserPersonData', UserPersonDataSchema);

module.exports = UserPersonData;

module.exports.newData = function(newData, callback) {
    newData.save(callback);
}

module.exports.checkData = async function(value) {
   return await UserPersonData.exists({user_id: value});
}

module.exports.getData = async function(value){
    return await UserPersonData.findById(value);
}

module.exports.getId = async function(value){
    return await UserPersonData.findOne({user_id: value}).then((e) => e.id);
}