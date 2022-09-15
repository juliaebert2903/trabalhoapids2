const { Livros } = require('./model');
const Sequelize = require ('sequelize');

class LivrosRepository {
    constructor() {
    }

    async save(ex) {
        await Livros.create(ex);
    }

    async random() {
        const ex = await Livros.findOne({
            order: 
                Sequelize.literal('random()')
        })
        return ex;
    }

    async detail(id) {
        const ex = await Livros.findByPk(id)
        return ex;
    }

    async list(autor) {
        const listagem = await Livros.findAll({
            where: { 
                autor
            }
        })
        return listagem;
    }
}

module.exports = LivrosRepository;