import express from 'express'
import { checkUser } from '../controllers/userSignupController.js';
import { addTodoByUserId,
        updateTodoByUserId,
        deleteTodoByUserId,
        getTodoByUserId,
        addCompleted

} from '../controllers/todoControllers.js';
const router= express.Router();


 router.route("/:userId")
// .all((req,res,next)=>{
//         res.send("Pass to this first!!!")
//         next()
// })
.get(getTodoByUserId)
.post(addTodoByUserId)


router.route("/comp/:itemId")
.post(addCompleted)


router.put("/:itemId",updateTodoByUserId)
router.delete("/:itemId",deleteTodoByUserId);




export default router