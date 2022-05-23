const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req,res) =>{
     conexion.query('SELECT * FROM usuarios', (error, results)=> {
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    })  
})


//crear registros
router.get('/create',(req, res)=>{
    res.render('create.ejs');
})


//ruta editar registros
router.get('/edit/:id',(req, res)=>{
    const id = req.params.id_usuarios;
    conexion.query('SELECT * FROM usuarios WHERE id_usuarios=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {user:results[0]});
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save)

module.exports = router;