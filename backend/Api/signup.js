const express=require('express');
const User=require('../DB/user');
const route=express.Router();

route.post('/',async(req,res)=>{

    const {name, email, phone,  password, confirmpassword,age}=req.body;
    if (name==="" || email==="" ||age===""  || phone==="" || password==="" || confirmpassword==="") {
       return res.status(422).json({error:"Please fill all the fields"}); 
    }

    const userLogin= await User.findOne({email:email});

    if(userLogin){
        return res.status(422).json({error:"Email already registered"});
    }

    else if(password!=confirmpassword){
        return res.status(422).json({error:"Password doesn't match"});
    }

    else{
        const user=User(req.body);
        user.save().then((result)=>{
            var userObj={
                _id: result._id.toString(),
                name: result.name,
                email: result.email,
            }
            res.status(200).json(userObj);
        }).catch((err)=>res.status(500).json({error:"Failed to register, Try again"}));
    }
    })


module.exports=route;
