const express = require("express");
const {randomBytes} = require("crypto")
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')

const app = express();
const post={};
app.use(bodyParser.json())
app.use(cors()) // cors ek function h as a middleware express framework me use hoga

app.post('/post', async (req,res)=>{
   const id = randomBytes(4).toString('hex'); //1lkkkk990klk
   const {title} = req.body;
   post[id]={
    id,
    title
   }

   await axios.post('http://127.0.0.1:4005/events', {
    type:'postCreated',
    data:{
        id,
        title

    }
   })

   res.status(201).send(post[id]);
});

app.get('/post', (req, resp)=>{
    resp.send(post);
})

app.post('/events', (req, resp)=>{
    console.log("events recieved". req.body.type);
    resp.send({});
})

app.listen('4000', ()=>{
console.log("Listening 4000 (:")
})