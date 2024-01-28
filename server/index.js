const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors");
const dotenv=require('dotenv');
const useRouter=require('./routes/userRouter')
const questionRouter=require('./routes/questionRouter');
const bodyParser = require('body-parser');

dotenv.config();
const app=express();
app.use(bodyParser.json());
app.use(cors());

const PORT=process.env.PORT;
mongoose.connect(process.env.MONGO_URI
    
).then(()=>{
 app.listen(PORT,()=>{
 console.log(`server started on port ${PORT}`)
})
})

app.use(useRouter)
app.use(questionRouter)