import express from "express"
import mongoose  from "mongoose";
import * as dotenv from "dotenv"
import dbConnection from "./config/dbConn.js"
import todoRoutesw from "./routes/todoRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
const PORT1= 5000
const PORT= process.env.PORT


dbConnection();

app.use("/",userRoutes);
 app.use("/",todoRoutesw)

//app.use("/",userRoutes);
 


mongoose.connection.once('open',()=>{
    //console.log("Connection was made ");
    app.listen(PORT || PORT1,()=>{
       // console.log(`Server is running on http://localhost:${PORT}`)
    })
})



