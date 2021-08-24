const mongoose = require ('mongoose');

const mealSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    }, 
    description:String,
    price : {
        type:Number,
        required:true
    }

})

const Meal = mongoose.model('meal' , mealSchema);

module.exports = Meal;
