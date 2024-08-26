import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';

const app = express();

app.use(express.json());
app.use('/api/user',router);

// app.use("/api", (req,res,next)=>{
//     res.send("fuck this");
// });

mongoose
    .connect(
        "mongodb+srv://nashwin:xCg4LHG3VEXAqfyZ@cluster0.baphd.mongodb.net/?retryWrites=true&w=majority&appName=Blog"
    )
    .then(()=>app.listen(4000))
    .then(() => 
        console.log("Connected to Database Listening to LocalHost 4000")
    )
    .catch((err) => console.log(err));


// xCg4LHG3VEXAqfyZ