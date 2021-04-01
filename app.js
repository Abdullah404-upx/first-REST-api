const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv/config')
app.set('view engine', 'ejs')

app.use(bodyParser.json())

// Importing Routes
const postsRoute = require('./Routes/posts');
app.use('/posts', postsRoute);

// middleWare



// ROUTES

app.get('/', (req, res)=>{
   // res.send("Home page...");
   res.render('index');
})
app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/posts', (req, res)=>{
    res.send("Your on poasts page...");
})


// coneecting to DB
mongoose.connect(process.env.DB_CONNECTION, (err)=>{
if(err)    
console.log("Error is encounter: \n", err)
else 
console.log("connected to DB");
})

app.use((req, res)=>{

    res.status(404).render('404');
})

// How to start listnieng
app.listen(3000, (err)=>{console.log("Listening to the port...")})

