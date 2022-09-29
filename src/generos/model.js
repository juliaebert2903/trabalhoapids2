const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Usuario } =require('../usuarios/model');

class Genero extends Model {}

Genero.init({
    id_genero: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    nome: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'generos',
    createdAt: false,
    updatedAt: false
});

Usuario.hasMany(Genero);
Genero.belongsTo(Usuario);

module.exports = { Genero };