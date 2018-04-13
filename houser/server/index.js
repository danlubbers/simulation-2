const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
// const cors = require('cors');
const config = require('../src/config'); 


const app = express();

app.use(bodyParser.json());
// app.use(cors());

app.get(`/api/getAllHouses`, controller.read);
app.post(`/api/addHouse`, controller.create);
app.put(`/api/`, controller.update);
app.delete(`/api/deleteHouse/:id`, controller.delete);

console.log(config.CONNECTION_STRING());
massive(config.CONNECTION_STRING()).then(connection => {
    app.set('db', connection);
    const port = 3750;
    app.listen(port, ()=>{console.log(`I will always hear you on Port: ${port}`)});
});
