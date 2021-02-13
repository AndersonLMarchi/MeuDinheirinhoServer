const mongoose = require('mongoose');
/* Errors */
mongoose.Error.messages.general.required = "O atributo '{PATH}' é Obrigatório!";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'!";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'!";
mongoose.Error.messages.String.enum = "'{VALUE}' não é um valor válido para o atributo '{PATH}'!";

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/db_finance', { 
    useNewUrlParser:true,
    useUnifiedTopology: true
});
