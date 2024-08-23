const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const { PORT } = require('./src/config/server.config')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.get('/ping',( req, res ) => {
    return res.json({message :"sb thik hai"});
})

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
});