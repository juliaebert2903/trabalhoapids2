// const AutorRepository = require('./repositorio-memory');
// const AutorRepository = require('./repositorio-sql');
const { Autor }=require('./model');
const crypto = require('crypto');


class AutorController {

    constructor() {
        
    }

    async create(req, res) {
        console.log("ADD NOVO AUTOR");
        const autoresBody=req.body;
        const ex = {  
            id: crypto.randomUUID(),
            // ...req.body
            // // autor: req.body.autor.toUpperCase()
            nome: autoresBody.nome
        };

        await Autor.create(ex);
        
        return res.json({
            ex
        });
    }

    async list(req, res) {
        try{
            const autores=await Autor.findAndCountAll();
            res.status(200).json(autores);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async update(req, res){
        try{
            const {id}=req.params;
            const {nome}=req.body;
            await Genero.update({nome}, {where: {
                id: id
            }});
            return res.status(200).json({msg: "Atualizado"});
        }catch(err){
            return res.status(400).json({err});
        }
    }
}


module.exports = AutorController;