const mongoose = require('mongoose');

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

const UserCore = mongoose.model('UserCore', UserCoreDataSchema);

module.exports = UserCore;