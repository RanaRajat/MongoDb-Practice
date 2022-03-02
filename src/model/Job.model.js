const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    company:{type:String,required:false},
    skills:{type:String,required:false},
    work_from_home:{type:String,required:false},
    notice_period_in_months:{type:Number,required:false},
    rating:{type:Number,required:false},
    openings:{type:Number,required:false},
    city:{type:String,required:false}
})

const Jobs = mongoose.model("jobs",jobSchema);

module.exports = Jobs;