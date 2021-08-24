const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/food-order-app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("DB NOT CONNECTED");
        console.log(err)
    })









    app.listen(8080, () => {
        console.log("Server runnig at port 8080");
    })