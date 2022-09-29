// const LivrosRepository = require('./repositorio-memory');
//const LivrosRepository = require('./repositorio-sql');
const crypto = require('crypto');
const { Livros, livro_genero } = require('./model');
const { Genero }=require('../generos/model');

class LivrosController {

    constructor() {
        //this.repository = new LivrosRepository();
    }

    async create(req, res) {
        console.log("ADD NOVO LIVRO");
        const ex = {  
            id: crypto.randomUUID(),
            ...req.body
            // autor: req.body.autor.toUpperCase()
        };

        await Livros.create(ex);
        
        return res.json({
            ex
        });
    }

    async createLivroGenero(req, res){
        console.log("ADD GENEROS NOS LIVROS")
        const ex={
            ...req.body
        };
        await livro_genero.create(ex)
        return res.json({
            ex
        });
    }

    async random(req, res) {
        const autor = await this.repository.random();
        return res.json(autor);
    }

    async list(req, res) {
        try{
            const livros=await Livros.findAndCountAll(
                {
                    include:[{
                        model: Genero
                    }]
                }
            );
            console.log(`<pre>${JSON.stringify(livros, null, 2)}</pre>`);
            res.status(200).json(livros);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async detail(req, res) {
        const { id } = req.params;
        const livro = await this.repository.detail(id);
        return res.json(livro);
    }
}


module.exports = LivrosController;