const express = require("express");

const app = express();

const mongoose = require("mongoose");

const controller = require("./Controller/Controller");
app.use(express.json());

const port = 3008;

const connect = ()=>{
    return mongoose.connect(`mongodb://127.0.0.1:27017/flashingJobs`);
}
app.use("/home",controller);
app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(port,function(){
    connect();
    console.log(`listening on ${port}`);
});

