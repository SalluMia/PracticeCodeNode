const mongoose= require("mongoose")

mongoose.connect('mongodb://localhost:27017/TestingSamiData')

.then(()=>{
    console.log('Connection Established')
}).catch((err)=>{
     console.log(err)
})