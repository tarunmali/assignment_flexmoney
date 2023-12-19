const express=require('express');
const User=require('../DB/user');
const route=express.Router();
const bcrypt=require('bcrypt');
const {sign}= require('jsonwebtoken')
     route.post('/',async(req,res)=>{
        const {email, password}=req.body;
        let token;

        if (email==="" || password==="") {
           return res.status(422).json({error:"Please fill all the fields"}); 
       }

       const userLogin= await User.findOne({email:email});


        if(!userLogin){
            return res.status(422).json({error:"User does not exist"});
        }
        else{
            const isMatch=await bcrypt.compare(password,userLogin.password);
            if(!isMatch){
                return res.status(422).json({error:"Password is incorrect"});
            }
            else{
                const accessToken=sign({email:email},"maybegeneraterandomly");
                var userObj = {
                    accessToken:accessToken
                } 
                res.status(200).json(userObj);
            }

        }

        
    })
    module.exports=route;