import mongoose from "mongoose";
const DBURI=process.env.DATABASE_URI

const dbConnection = async ()=>{
    //console.log(process.env.DATABASE_URI);
try{
        await mongoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
}
catch(err){
    console.log(err);
}


}

export default dbConnection;




