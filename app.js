const express = require('express');

const userRoutes = require('./routes/user/users.routes');

const app = express();

const PORT = 3000;

app.use('/users', userRoutes);

app.listen(PORT, () => { console.log('Hey Listen: ' + PORT)});

app.use('*', (req, res) => {
    //res.sendFile(path.join(__dirname, 'public/index.html'));
    res.send('Hello World');
})