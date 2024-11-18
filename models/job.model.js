import mongoose from "mongoose";

const jobSchema =  new mongoose.Schema({
    title: {
    type:String,
    required:true
    },
    description: {
        type:String,
        required:true
    },
    requirements: {
        type:String,
        },
    salary: {
        type:Number,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    jobType: {
    type:String,
    required:true
    },
    position: {
        type:Number,
        required:true
    },
    company: {
        type:mongoose.Schema.Types.ObjectId,  //relation between job and company.
        ref:'Company',
        required:true
    },
    created_by: {
        type:mongoose.Schema.Types.ObjectId,  
        ref:'User', //admin
        required:true
        },
    applications: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Appliaction'
        }
    ]
}, {timestamps:true});

export const Job = mongoose.model("Job", jobSchema);