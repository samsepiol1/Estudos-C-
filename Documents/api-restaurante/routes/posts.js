const express = require('express');

const router = express.Router();



const Post = require('../model/Post');



router.get('/',(req,res) =>{
    res.send('Seja Bem vindo');

});


//Acredito que tenha algum erro nessa linha e precisaria de mais tempo para descobrir qual
router.post('/',(req,res) =>{
    const post = new Post({
        restaurante:req.body.restaurante,
        descricao: req.body.descricao
    });
    post.save()
        .then(item => {
        res.send("Item Salvo no Banco de dados");
        })
        .catch(err => {
        res.status(400).send("Não foi possível salvar o item no banco de dados");
       });
    

    //post.save()

    //.then(data =>{
        //res.json(data)
    //})
    //.catch(err=>{
        //res.json({message:err})
    //});
});

module.exports = router;