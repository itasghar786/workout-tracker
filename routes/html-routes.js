//html routes

// dependencies

var path = require('path');
module.exports = function(app){

    app.get('/', (req,res)=> {
        //loads html index.html
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/excercise', (req,res) =>{
        //loads exercise.html
        res.sendFile(path.join(__dirname,'../piblic/exercise.html'));
    });

    app.get ('/stats', (req,res) =>{
        //loads excercise.html
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

};