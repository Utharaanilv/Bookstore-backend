const mongoose=require('mongoose')

const Schema = mongoose.Schema;

const BookSchema=new Schema({
    author:{
        type:String,
        required:true,
        trim:true  
    },
    category:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        
    },
    price:{
        type:String,
        required:true

    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true
    }
   
})

module.exports=mongoose.model("books",BookSchema)
