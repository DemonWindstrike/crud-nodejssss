const conexion = require('../database/db');

exports.save = (req, res)=> {
    const user = req.body.user;
    const rol = req.body.tipo_usuario;
    const apellidos = req.body.apellidos;

    conexion.query('INSERT INTO usuarios SET ?', {nombres:user,apellidos:apellidos, tipo_usuario:rol},(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

}

exports.update = (req, res)=> {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.tipo_usuario;

    conexion.query('UPDATE usuarios SET ? WHERE id = ?', [{user:user, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        } 
    })

}