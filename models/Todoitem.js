import mongoose from "mongoose";
import { Schema } from "mongoose";

const TodoSchmea = new Schema({
    item:{
        type:String,
        required :true
    },
    completed:{
        type:Boolean,
        default:false
    }, 
    userId:{
        type:String,
    
    }

})

const TodoModel = mongoose.model("Todoitem",TodoSchmea);

export default TodoModel;