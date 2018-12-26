const express = require('express')
const app = express() //declaramos una variable app donde se guarda el producto de la funcion express
const hbs = require('hbs');
require('./hbs/helpers');

 
//middleware ES UN CALLBACK QUE SE EJECUTARA SIEMPRE SIN IMPORTAAAR QUE URL SEA REQUERIDA
app.use(express.static(__dirname + '/public'));//instanciamos la libreria express con el metodo use para decir que ocupe los archivos que se encuentran el la carpeta public
//__dirname completa la ruta absoluta para la carpeta public

//USANDO Express HBS engine
//los parciales son un bloque de codigo html que podemos reutilizar
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

// se confugura una solicitud get cuando el pad sea un slash /
	//todas las peticiones uqe entren por "/" ejecutan la funcion de abajo
 	

 	//res.send('Hola Mundo');
 	res.render('home',{
 		nombre:'JessJimnz',
 	});

});


app.get('/about', (req, res) => {

 	res.render('about',{
 		anio: new Date().getFullYear()
 	});

});



app.listen(3000, () => {
	console.log('Escuchando en el puerto 3000');
});