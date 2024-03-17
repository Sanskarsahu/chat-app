import User from "../models/user.model.js";

export const getUerForNav =async(req,res)=>
{
    try {
        const loggedInUserId = req.user;
        
         res.status(200).json(loggedInUserId );
       
    } catch (error) {
        console.log("error in getUserForSideBar",error.message)
        res.status(500).json({error: "internal server error"})
    }
}