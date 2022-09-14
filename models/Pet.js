const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name: String,
    age: Number,
    type: String,
    img: String,

}
,{timestamps: true})

const Pet = mongoose.model('Pet',PetSchema);

module.exports =Pet