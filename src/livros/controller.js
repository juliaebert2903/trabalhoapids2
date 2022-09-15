// const LivrosRepository = require('./repositorio-memory');
const LivrosRepository = require('./repositorio-sql');
const crypto = require('crypto');

class LivrosController {

    constructor() {
        this.repository = new LivrosRepository();
    }

    async create(req, res) {
        console.log("ADD NOVO LIVRO");
        const ex = {  
            id: crypto.randomUUID(),
            ...req.body,
            autor: req.body.autor.toUpperCase()
        };

        await this.repository.save(ex);
        
        return res.json({
            ex
        });
    }

    async random(req, res) {
        const autor = await this.repository.random();
        return res.json(autor);
    }

    async list(req, res) {
        const autor = req.query.autor.toUpperCase();
        const listagem = await this.repository.list(autor);
        console.log(listagem)
        return res.json(listagem);
    }

    async detail(req, res) {
        const { id } = req.params;
        const livro = await this.repository.detail(id);
        return res.json(livro);
    }
}


module.exports = LivrosController;