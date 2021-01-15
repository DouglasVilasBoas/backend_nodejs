const mongoose = require('mongoose');

const schema = new mongoose.Schema({    
    marca: String,
    modelo: String,
    valor: Number,
    quantidade: Number
});

module.exports = mongoose.model("Celular", schema);