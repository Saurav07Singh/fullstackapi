import UserModel from "../models/User.js"

const addingUser= async (req,res)=>{

    const {username,password,email}= req.body
    if(!username || !password || !email) return res.status(201).json({"message":"Error!!"})

    try{
    const newUser = await UserModel.create(
        {
            username,
            password,
            email
        }
    )
        res.json(newUser._id);
    }
    catch(err){
        console.log(err)
    }

}

const checkUser= async (req,res)=>{

    const {username,password}= req.body
    
    if(!username || !password ) return res.status(400).json({"message":"Error!!"})

    const existingUser= await UserModel.find({username:username,password:password}).exec();
   
    if(!existingUser.length) return res.status(401).send("0")
   
    res.json(existingUser[0]._id);

}

export{ addingUser,checkUser}