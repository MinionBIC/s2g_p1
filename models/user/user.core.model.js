const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserCoreDataSchema = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }         
    }
)

const UserCoreData = mongoose.model('UserCoreData', UserCoreDataSchema);

module.exports = UserCoreData;

module.exports.newUser = function(newUser, callback) {

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
} 

module.exports.checkByEmail = async function(value) {
    return await UserCoreData.exists({ email: value});
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {        
        callback(null, isMatch);
    });
}

module.exports.getUserById = async function(id, callback) {
  return await UserCoreData.findById(id, callback);
}