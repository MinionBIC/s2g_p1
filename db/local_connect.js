const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/SurveyVault', { useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB Localhost')
}).catch((e) => {
    console.log('Error Connecting to MongoDB')
    console.log(e)
})

module.exports = {mongoose}