const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
      
      name:{
          type:String,
          required:true
      },
      email:{
         type:String,
         required:true
      },
      address:{
         type:String,
         required:true
      },
     phone:{
         type:Number,
         required:true
     }
}, {
    timestamps:true
})

const users=mongoose.model('Members', userSchema)

module.exports=users