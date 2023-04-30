const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user/users.routes');
const surveyRoutes = require('./routes/survey/survey.routes');
const feedbackRoutes = require('./routes/feedback/feedback.routes');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


if(process.env.NODE_ENV == "development") { 
    const  Mongoose = require('./db/local_connect');
}
else { 

}

app.use('/users', userRoutes);
app.use('/survey', surveyRoutes);
app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => { console.log('Hey Listen: ' + PORT)});

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    res.send('Hello World ' + process.env.NODE_ENV);
})