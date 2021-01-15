const Celular = require('../model/celular');

async function getCelular(req, res){
    const listaCelular = await Celular.find();
    res.json(listaCelular);
}

async function postCelular(req, res){
    const novoCelular = req.body;
    const celularCadastrado = new Celular(novoCelular);

    const result = await celularCadastrado.save();
    res.json(result);
}

async function putCelular(req, res){
    const id = req.params.id;
    const body = req.body;

    const result = await Celular.updateOne({ _id: id }, { $set: body })
    res.json(result);
}

async function deleteCelular(req, res){
    const id = req.params.id;

    const result = await Celular.findByIdAndDelete(id);
    res.json(result);
}

module.exports = {getCelular, postCelular, putCelular, deleteCelular};