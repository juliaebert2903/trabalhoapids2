const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Livro } = require('../livros/model');
const { Usuario } = require('./model');

class Resposta extends Model {}
    
Resposta.init({
    id_exercicio: DataTypes.STRING,
    alternativa: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'b3',
    modelName: 'resposta'
});

Resposta.belongsTo(Usuario);
Resposta.belongsTo(Livro, {
    foreignKey: 'id_exercicio'
});

Usuario.hasMany(Resposta);
Livro.hasMany(Resposta, 
    {
        foreignKey: 'id_exercicio'
    });

sequelizeCon.sync();

module.exports = { Resposta };