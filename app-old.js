
const http = require ('http');

http.createServer ((req, res)=> { //para poder escuchar peticiones http primero debemos crear el servidor


	res.writeHead(200,/*estatus 200 indica que todo salio bien*/ {'Content-Type': 'application/json'});
	
	let salida = {

		nombre: 'Jess',
		edad: 23,
		url: req.url
	}

	//res.write('Hola mundo');
	res.write(JSON.stringify(salida)); //mandamos el objeto "salida como un JSON 
	res.end(); //indica al servidor que ya acabamos de crear la respuesta

})
.listen(8080);

console.log('Escuchando el puerto 8080');