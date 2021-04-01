const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// getting all Posts
router.get('/', (req, res)=>{

     Post.find()
     .then(data=>{
      res.json(data);
     })
     .catch(err=>{
         console.log(err);
     })
})

// gettting a specifc Post
router.get('/:id', (req, res)=>{
   
    Post.findById(req.params.id)
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{console.log(err)})
})


// deleteing a specifc Post

router.delete('/:id', (req,res)=>{
    Post.remove({_id: req.params.id})
    .then(data=>{
        console.log("post is removed!")
    })
    .catch(err=>{console.log(err)})
})


// Submiting a Post

router.post('/', (req,res)=>{
 //  console.log(req.body); = json object
 res.render('../views/create.ejs')
 const aPost = new Post({
     title: req.body.title,
     description: req.body.description
 })

    aPost.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log("\n Error is encouter at posting \n", err);
    })
})


// updateing a Post

router.put('/:id', (req,res)=>{
    Post.updateOne({_id: req.params.id}, {$set: {title: req.body.title}})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>console.log(err))
})





module.exports = router;