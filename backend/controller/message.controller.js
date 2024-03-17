import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReciverSocketId, io } from "../socket/socket.js";

export const sendMessage =async (req,res) =>{
    try {
        const  {message} =req.body;
        const  {id: reciverid}= req.params;
        const senderid =req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all :[senderid , reciverid]},
        });
        if (!conversation){
            conversation =await Conversation.create({
                participants: [senderid , reciverid],
            });
        }
        const newMessage= new Message({
            senderid,
            reciverid,
            message,
        });
        if (newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),newMessage.save()]);

        const reciverSocketId =getReciverSocketId(reciverid);
        if (reciverid){
            io.to(reciverSocketId).emit("newMessage",newMessage)
        }


        res.status(201).json(newMessage);
    }
     catch (error) {
       console.log("error in sending the massage :", error.message);
       res.status(500).json({error:"Internal server error"}); 
    }
}
export const getMessage = async (req,res) =>{
    try {
        const {id: userToChatId}= req.params;
    const senderid =req.user._id;

    const conversation= await Conversation.findOne({
        participants:{
            $all:[senderid,userToChatId]
        },
    }).populate("messages");

    if(!conversation) {
        return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
    } catch (error) {
        console.log("error in getMessages controller:",error.message);
        res.status(500).json({error:"internal server error"});
    }
}