
<?php

/*
 *	Requerimientos
 */

// @Params
// 	Nombre:
// 	Teléfono:
// 	Correo electrónico:
// 	Consumo Kw al mes: (mostrar con una ?) "teniendo la opcion de poner una miniatura de imagen" 
// 	Porcentaje de factura a reducir:      (mostrar 100% por default)

$nombre 	= "";
$phone 		= "";
$email 		= "";
$consumo	= "";
$percen		= "";
$fecha		= "";

// check
if(validar_parametros($nombre, $phone, $email, $consumo, $percen))
	// all ok
	echo "ok, ";
else
	// oops! something wrong.
	die("oops");

// :D
$options = array(
	'to' => $email,
	'name' => $nombre 
);

echo sendMail($options);





function validar_parametros($nombre, $phone, $email, $consumo, $percen)){
	return true;
}

?>