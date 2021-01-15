const express = require('express');
const controller = require('./app/controller/celular');
require("./config/database");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message:"Hello World!" })
});

app.get('/celular', controller.getCelular);

app.post('/celular', controller.postCelular);

app.put('/celular/:id', controller.putCelular);

app.delete('/celular/:id', controller.deleteCelular);

app.listen(3000, (error) => {
    if(error){
        console.error(error);
    }
    console.log("Servidor started!");
});