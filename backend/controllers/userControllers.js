import User from "../models/userModel.js";

export const userControllers = async (req, res) => {

    try {
        const loggedUsersId = req.user._id;
        const filteredUser = await User.find({ _id: { $ne: loggedUsersId } }).select('-password');

        res.status(200).json(filteredUser);
    } catch (error) {
        console.log("Error in user controller:", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}