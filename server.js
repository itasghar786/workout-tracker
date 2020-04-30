// npm packagees 

const express = require ('express');
const mongoose = require ('mongoose');
const logger = require ('morgan');

//setting port

const PORT = process.env.PORT || 3000;

// set models folder to db varible 
const db = require('./models');

//creating express app
const app = express();

//confeg middileware needed for parsing
app.use(express.urlencoded({ extended: true}));
app.use (express.json());

// static directory
app.use (express.static('public'));

// morgan middleware
app.use(logger('dev'));

// starting db with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// routes

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

//start server to listen

app.listen(PORT, () => console.log(`App running on http://localhost:%s/`, PORT));