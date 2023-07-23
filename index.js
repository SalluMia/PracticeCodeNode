const express=require("express")

const app=express()

const bodyParser=require('body-parser')
const cors=require("cors")

require('./db/database')

app.use(bodyParser.json())
app.use(cors());
const PORT=5001

app.use(require('./routes/productroutes'))

app.use(express.json())

app.listen(PORT, ()=>{
       console.log(`Server is running on ${PORT}`)
})