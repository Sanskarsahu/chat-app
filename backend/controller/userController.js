import User from "../models/user.model.js";

export const getUerForSidebar =async(req,res)=>
{
    try {
        const loggedInUserId = req.user._id;
        const allUser =await User.find({_id:{ $ne: loggedInUserId}}).select("-password")
        res.status(200).json(allUser);
        
       
    } catch (error) {
        console.log("error in getUserForSideBar",error.message)
        res.status(500).json({error: "internal server error"})
    }
}