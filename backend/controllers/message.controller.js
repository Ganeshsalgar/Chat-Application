import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = async (req , res) => {
    try {
        const senderId = req.id
        const receiverId = req.params.id;
        const { message } = req.body;

        //make sure who conversation is done

        let gotConversation = await Conversation.findOne({
            participants : {$all : [senderId , receiverId]}
        })


        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId , receiverId]
            })
        }


        const newMessage = await Message.create({
            senderId, 
            receiverId,
            message
        });

        if(newMessage){
            gotConversation.messages.push(newMessage._id)
        }

        await gotConversation.save();


        //socket.io

        return res.status(201).json({
            message :"New message send Successfully."
        })

    } catch (error) {
        console.error("sendMessage error:", error.message);
    return res
      .status(500)
      .json({ message: "sendMessage failed", error: error.message });
    }
}



export const getMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId , receiverId]}
        }).populate("messages");


        return res.status(201).json(
            conversation?.messages
        )
    } catch (error) {
        console.error("getMessage error:", error.message);
    return res
      .status(500)
      .json({ message: "getMessage failed", error: error.message });
    }
}