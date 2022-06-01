const express = require ('express');
const { json } = require('express/lib/response');
const app = express();

app.set('views engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));


const PORT = process.env.PORT || 3000

app.listen(PORT, function(){

    console.log("Servidor escuchando en el puerto", PORT)
});