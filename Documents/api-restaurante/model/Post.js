const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    restaurante:{
        type:String,
        required:true
    },

    id:{
        type:Number

    },

    descricao:{
        type:String,
        required:true

    }
    

})

module.exports = mongoose.model('posts',postSchema)