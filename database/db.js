const mysql = require('mysql');


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'musicpro'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('conectado a la base de datos ')
})

module.exports = conexion;