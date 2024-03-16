const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json())

app.post('/events', (req, resp)=>{
    const events = req.body;

    axios.post('http://127.0.0.1:4000/events', events)
    axios.post('http://127.0.0.1:4001/events', events)
    //axios.post('http://127.0.0.1:4002/events', events)
})

app.listen(4005, ()=>{
    console.log("lesten to 4005")
})