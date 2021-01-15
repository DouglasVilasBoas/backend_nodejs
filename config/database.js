const mongoose = require('mongoose');
const uri = "mongodb://localhost/projetoBanco";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.on("error", console.error);
db.once("open", () => console.log( "Connected to mongodb!" ));

module.exports = db;