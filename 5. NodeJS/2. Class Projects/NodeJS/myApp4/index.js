require('dotenv').config(); // Add this line to load .env variables

const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { 
        console.log('Connection to MongoDB established')
    })
    .catch(err => { 
        console.log('Failed to connect to MongoDB', err);
    });

const user = require('./routes/user.routes');

app.use('/api/user', user);    

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
