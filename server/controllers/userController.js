import { User } from "../models";

async function doRegister(req, res) {
    try {
        const user = await User.findOrCreate(req.body);
        if (user) {
            res.status(301).json({ error: "User already exists!" })
        } else {
            const token = user.createToken();
            res.status(201).json({ token, user });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function doLogin(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(404).json({ error: "User not found!" })
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function getUser(req, res) {
    const userId = req.params.userId
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) {
            res.status(404).json({ error: "User not found!" })
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }


}

module.exports = { doRegister, doLogin, getUser };