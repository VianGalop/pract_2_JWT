# P2_JWT

1.	Integración de JSON Web Tokens con
	- npm install jsonwebtoken

2.	creamos un archivo auth.js para generar el token y su verificacion con las funciones
    - const secretKe = 'la clave'
 	- jwt.sign(payload, secretKey, { expiresIn: '1h' });
	- jwt.verify(token, secretKey);
	- payload -> los datos que se van a encriptar
	- secretKey -> es la clave de encriptacion
	- expiresIn -> para colocar un timpo limite de expirracion (esta en milisegundos)

3.	Creamos lops endpoint de login para pedir los datos a validar
	- atravez de req.body pedimos los datos
	- validamos que si se enviaron los datos
	- generamos el toquen dediante la funcion sign() que previamente se creo en otro archivo dentro de la funcion generartoken()

4.	creamos endpoint de verify para validar el token
	- con req.headers.authorization traemos el token creado
	- validamos que si se envio un token
	- token.split(' '[1]) Solo tomamos la cadena del token
	- enviamos ese token a la funcion verify() que previamente se creo en otro archivo dentro de la funcion verify()
	- hacemos las validaciones de expiracion del token
