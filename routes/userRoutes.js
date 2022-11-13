import express from 'express'
import {addingUser,checkUser} from "../controllers/userSignupController.js"

const router= express.Router();


router.route("/")
.post(addingUser)

router.route("/login")
.post(checkUser)



export default router;