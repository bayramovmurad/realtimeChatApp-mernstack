import Conversation from '../models/conversationModel.js';
import Message from '../models/messageModel.js';

export const messages = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        };

        res.status(201).json(newMessage);

        await Promise.all([conversation.save(), newMessage.save()]);

    } catch (error) {
        console.log("Error in send message controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const convercation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate('messages');

        if (!convercation) {
            return res.status(200).json([]);
        };

        const messages = convercation.messages;

        res.status(200).json(messages);



    } catch (error) {
        console.log("Error in getMessages controller:", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
};