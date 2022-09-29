const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');

const { Autor } =require('../autores/model');
const { Genero } =require('../generos/model');
const { Usuario } =require('../usuarios/model');

class Livros extends Model {}

Livros.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    nome: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    lancamento: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'livro',
    createdAt: false,
    updatedAt: false
});

const livro_genero = sequelizeCon.define('livro_genero', {
    livro_id: {
      type: DataTypes.STRING,
      references: {
        model: Livros,
        key: 'id'
      }
    },
    genero_id: {
      type: DataTypes.STRING,
      references: {
        model: Genero, 
        key: 'id_genero'
      }
    }
  });
Livros.belongsToMany(Genero, { through: livro_genero });
Genero.belongsToMany(Livros, { through: livro_genero });


Autor.hasMany(Livros);
Livros.belongsTo(Autor);

Usuario.hasMany(Livros);
Livros.belongsTo(Usuario)


module.exports = { Livros, livro_genero };