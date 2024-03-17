import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import genrateTokenAndSetCookie from "../utils/genratetoken.js";
export const signup = async(req,res)=>{

    try{
    const {fullname,username,password,confirmPassword,gender}= req.body;
    
    if (password!==confirmPassword){
        return res.status(400).json({error:"password dont match"})
    }
    const user= await User.findOne({username});
    if(user){
        return res.status(400).json({error:"Username already exist"})
    }

    const salt= await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
	const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser= new User({
        fullname,
        username,
        password:hashedpassword,
        gender,
        profilePic:gender === "male" ? boyProfilePic : girlProfilePic,
    })
   if (newUser)
   {
    genrateTokenAndSetCookie(newUser._id,res);
    await newUser.save();
    res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,

    });
    }
    else{
    res.status(400).json({error:"invalid user data"});
    }
}

catch (error){
    console.log("error",error.message);
     res.status(500).json({error:"internal server error"})

    }
    
};
export const login = async(req,res)=>{
    try {
        const {username, password} =req.body;
        const user =await User.findOne({ username});
        const ispasswordcorrect= await bcrypt.compare(password, user?.password || "");
        
        if (!user || !ispasswordcorrect){
            return res.status(400).json({ error:"invaid username or password"});
        }

        const token= genrateTokenAndSetCookie(user._id,res);
       
        res.status(200).json({
            _id : user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
            token: token
        })


    } catch (error) {
        console.log("error",error.message);
        res.status(500).json({error:"internal server error"})
   
    }
    
};
export const logout =(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({massage:"logout secuss"});
    } catch (error) {
        console.log("error",error.message);
        res.status(500).json({error:"internal server error"})
    }
};