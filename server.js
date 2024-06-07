const express=require('express');
const app=express();

app.use(express.json())

require('dotenv').config();

const port=process.env.PORT || 4000

const blogroute=require('./Routes/blogroute')

// Append /api/v1 with each api route 

app.use('/api/v1',blogroute)

// Connecting Database 

const dbConnect=require('./Config/Database')

dbConnect();


app.get('/',(req,res)=>{
    res.send("Db conected")
})
 
app.listen(port,()=>{
    console.log(`App running successfully at http://localhost:${port}`);
})