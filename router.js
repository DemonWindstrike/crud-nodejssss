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

//ruta para eliminar registro
router.get('/delete/:id', (req,res)=>{
    conexion.query('DELETE FROM usuarios WHERE id=?', [id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('/');
        } 
    })
})



const crud = require('./controllers/crud');
const req = require('express/lib/request');
const res = require('express/lib/response');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;