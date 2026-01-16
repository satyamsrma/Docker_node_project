const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const app=express();

app.get('/home',(req,res)=>{
    res.json({message:'OK bbyee'});
});

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000");
});