import UserModel from "../models/User.js";
import TodoModel from "../models/Todoitem.js";

const addCompleted= async (req,res)=>{
    const {itemId}= req.params
    const {userId} = req.body;
    const Item= await TodoModel.find({_id:itemId}).exec();
   
    if(Item[0].completed==false){
       // console.log("yaas!!!!!!!");
        await TodoModel.updateOne(
                    {_id:itemId},
                    {
                        $set : {completed:true}
                    }
        )
    }
    else{
        await TodoModel.updateOne(
            {_id:itemId},
            {
                $set : {completed:false}
            }
)
    }

    const todoList = await TodoModel.find({userId:userId}).exec();
  
    res.json(todoList);;

}

const getTodoByUserId = async (req,res)=>{
 
    const {userId} = req.params;
   
   //search by username again and then find the user id of the user in the db then search from the userid in the 
   // Todolist Collection

    if(!userId) return res.status(400).send({"message":"error"})
  
    const user=await UserModel.find({_id:userId}).exec()
   
    if(!user.length) return res.status(401).json({"message":"User not found in the database!!!!"})
   
    const todoList = await TodoModel.find({userId:userId}).exec();
  
    res.json(todoList);;

}

const addTodoByUserId= async (req,res)=>{
     
    const {userId}= req.params
    const {newItem : item }= req.body

    if(!userId || !item) return res.status(400).send({"message":"error"})

    const itemPresent= await TodoModel.find({item}).exec();
   
    if(itemPresent.length!=0) return res.status(400).send({"message":"Alreay Presrnt!!"})

    const newItem = await TodoModel.create(
        {
         item,
         userId 
        }
    )
 
    const todoList = await TodoModel.find({userId:userId}).exec();
    res.json(todoList)

}

const updateTodoByUserId = async (req,res)=>{
    const {itemId}= req.params
    const {newItem : item }= req.body
    const {userID:userId}= req.body
   
    if(!itemId || !item) return res.status(400).send({"message":"please send the correct data!!"})

    const old_item=await TodoModel.find({_id:itemId}).exec()
    if(!old_item) return res.status(204).json({"message":"Item not found in the database!!"})

    const itemPresent= await TodoModel.find({item}).exec();

    if(itemPresent.length!=0) return res.status(400).send({"message":"Alreay Presrnt!!"})

    const update_item = await TodoModel.updateOne(
        {_id:itemId},
        {
            $set : {item:item}
        }
        
    )
    const todoList = await TodoModel.find({userId:userId}).exec();
    res.json(todoList)
    
}

const deleteTodoByUserId = async (req,res)=>{
    const {itemId}= req.params
    if(!itemId ) return res.status(400).send({"message":"please send the correct data!!"})

    const old_item=await TodoModel.find({_id:itemId}).exec()
    if(!old_item) return res.status(204).json({"message":"Item not found in the database!!"})

    const deleted_item= await TodoModel.deleteOne(
        {_id:itemId}
    )
    res.json(deleted_item)
}

export {
    getTodoByUserId,
    addTodoByUserId,
    updateTodoByUserId,
    deleteTodoByUserId,
    addCompleted   
}