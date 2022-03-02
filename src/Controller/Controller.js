const express = require('express');
const router = express.Router();
const Jobs = require('../model/Job.model');
router.get("",async(req,res)=>{
    const Data = await Jobs.find().lean().exec();
    res.send(Data);
})
router.get("/:id",async(req,res)=>{
    const data = await Jobs.findById(req.params.id).lean().exec();
    res.send(data);
})
router.get("/city/:city/company/:company",async(req,res)=>{
    try{
    const data = await Jobs.find({$and:[{city:{$eq:req.params.city}},{company:{$eq:req.params.company}}]}).lean().exec();

    res.send(data);}
    catch(e){
        res.status(501).send(e);
    }
})

router.get("/work_from_home/:bool",async(req,res)=>{
    try{
    const data = await Jobs.find({work_from_home:{$eq:req.params.bool}}).lean().exec();

    res.send(data);}
    catch(e){
        res.status(501).send(e);
    }
})

router.get("/notice_period/:val",async(req,res)=>{
    try{
    const data = await Jobs.find({notice_period_in_months:{$eq:req.params.val}}).lean().exec();

    res.send(data);}
    catch(e){
        res.status(501).send(e);
    }
})

router.get("/rating/:n",async(req,res)=>{
    try{
    const data =  await Jobs.find().sort({"rating":req.params.n}).lean().exec();

    res.send(data);}
    catch(e){
        res.status(501).send(e);
    }
})

router.get("/company/:n",async(req,res)=>{
    try{
    const data =  await Jobs.find({company:{$eq:req.params.n}}).lean().exec();

    res.send(data);}
    catch(e){
        res.status(501).send(e);
    }
});
//openings

router.get("/openings/:n",async(req,res)=>{
    try{
    const data =  await Jobs.find({},{"company":1,_id:0}).sort({openings:req.params.n}).lean().exec();

    res.send(data);}
    catch(e){
        res.status(501).send(e);
    }
});

router.post("",async(req,res)=>{
    const data = await Jobs.create(req.body); 
    res.status(201).send(data);
})

router.patch("/:id",async(req,res)=>{
    const change = await Jobs.findByIdAndUpdate(req.params.id,req.body);
    res.status(201).send(change);
})

router.delete("/:id",async(req,res)=>{
    try{
    const deleted = await Jobs.findByIdAndDelete(req.params.id);
    res.status(201).send(deleted);}
    catch(e){
        res.send(501).send(e);
    }
})


module.exports = router;
