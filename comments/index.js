const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const commentPostbyId = [];

app.post('/post/:id/comment', async (req, resp)=>{

    const comment = commentPostbyId[req.params.id] || [];
    const id = randomBytes(4).toString('hex');
    const {content} = req.body;
    comment.push({
        id, 
        postid:req.params.id,
        content
    })

    await axios.post('http://127.0.0.1:4005/events', {
        type:'commentCreated',
        data:{
            id:id,
            postId: req.params.id,
            content
        }        
    })

    commentPostbyId[req.params.id] = comment
    resp.status(201).send(comment);

})

app.get('/post/:id/comment', (req, resp)=>{
    resp.send(commentPostbyId[req.params.id] || []);
});

app.post('/events', (req, resp)=>{
    console.log('Event Recieved', req.body.type);
    resp.send({})
})

app.listen(4001, ()=>{
    console.log("listen 4001");
})