// require mongoose

const mongoose = require('mongoose');

// create schema variable
const Schema = mongoose.Schema;
const  WorkoutScema = new Schema({
    day: Date,
    excercise: [
        {

            type: {
                type:String
            },
            name:{
                type:String
            },
            distince:{
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

WorkoutScema.methods.workoutday = function(){
    this.day = Date.now();
    return this.day;
};

const Workout = mongoose.model('Workout', WorkoutScema);

module.exports = Workout;