// npm packagees 

const express = require ("express");
const path = require ("path");
const mongoose = require ("mongoose");
const logger = require ("morgan");
const compression = require("compression");

//creating express app
const app = express();

//setting port

const PORT = process.env.PORT || 3000;

// set models folder to db varible 
//const db = require('./models');

// morgan middleware
app.use(logger('dev'));

//confeg middileware needed for parsing
app.use(express.urlencoded({ extended: true}));
app.use (express.json());

// static directory
app.use (express.static(path.join(__dirname,"public")));
app.use(compression());


app.use(require("./routes/html-routes.js"));
require("./routes/api-routes.js")(app);

// starting db with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds019053.mlab.com:19053/heroku_676sm5wm",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// routes

//require('./routes/html-routes.js')(app);
//require('./routes/api-routes.js')(app);

//start server to listen

app.listen(PORT, ()=> {
    console.log(
        `Listening on port ${PORT}`
)
});