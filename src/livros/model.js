const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');

class Livros extends Model {}

Livros.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    autor: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    lancamento: DataTypes.STRING,
    genero: DataTypes.JSON
}, { 
    sequelize: sequelizeCon, 
    schema: 'b3',
    modelName: 'livro'
});


module.exports = { Livros };