const express = require("express");
const app = express();
const connectDB = require("./db.js");
const path = require("path");
const jobsRoute = require('./routes/jobsRoute')
const userRoute = require('./routes/usersRoute')
const dotenv = require('dotenv').config()

app.use(express.json())


app.use('/api/jobs/', jobsRoute)
app.use('/api/users/', userRoute)
const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => console.log('Node JS Server Started'));