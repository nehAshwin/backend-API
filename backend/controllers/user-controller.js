import User from "../model/User.js"; 
import bcrypt from "bcryptjs";

// get all user info function
export const getAllUser = async(req, res, next)=>{
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users){
        return res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({users})
}

// sign up function
export const signup = async(req, res, next) => {
    // created request.body field to recieve from frontend
    const {name, email, password} = req.body;

    // check if user already exists
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err)
    }
    if (existingUser){
        return res.status(400).json({message: "User Already Exists! Login Instead"});
    }

    // encrypt password
    const hashedPassword = bcrypt.hashSync(password);

    // if user does not exist, create new user
    const user = new User({
        name, 
        email, 
        password: hashedPassword
    });

    // try catch block to save user
    try{
        await user.save();
    } catch (err) {
        return console.log(err)
    }

    return res.status(201).json({user})
}

export const login = async(req, res, next) => {
    const {email, password} = req.body;
    // check if user already exists
    // is there a way to not repeat this code?
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err)
    }
    if (!existingUser){
        return res.status(404).json({message: "User Not Found"});
    } 

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect Password"});
    }
    return res.status(200).json({message: "Login Successful"});
}