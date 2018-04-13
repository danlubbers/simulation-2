const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../server/controller');
const massive = require('massive');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());


app.get(`./api/`, controller.read);
app.post(`./api/`, controller.create);
app.put(`./api/`, controller.update);
app.delete(`./api/`, controller.delete);

massive(process.env.Connection_String).then(connection => {
    app.set('db', connection);
    const port = 3750;
    app.listen(port, ()=>{console.log(`I will always hear you on Port: ${port}`)});
});
