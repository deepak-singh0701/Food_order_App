const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Meals = require("../models/meals");

router.get("/meals" , async(req,res)=>{
    const meals= await Meals.Find({});
    res.send(meals);
});



module.exports = router;