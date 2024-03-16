const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/post', (req, resp)=>{

});

app.post('/events', (req, resp)=>{

})

app.listen(4002, ()=>{
    console.log(4002)
})
