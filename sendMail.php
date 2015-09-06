<?php

/*
 *	Formulario de Contactenos
 */


$postdata = file_get_contents("php://input");
$req = json_decode($postdata);

// params
$name 	= $req->name;
$phone 	= $req->phone;
$email	= $req->email;
$comment= $req->comment;

if(validar_params($name, $phone, $email, $comment)){
	$params = array(
		'to' => $email,
		'name' => $name,
		'phone' => $phone,
		'comment' => $comment
	);

	$r = sendMail($params);

	$res['code'] = $r;
	$res['message'] = 'ok';
	echo json_encode($res);
} else {
	$res['code'] = 1;
	$res['message'] = 'not valid params';
	echo json_encode($res);
}



function validar_params($a, $b, $c, $d){
	return ($a!=""&&$b!=""&&$c!=""&&$d!="");
}

function sendMail($params){
	// get params
	$to = $params['to'];
	$nombre = $params['name'];

	$headers = "From: Esolar <noreply@ecologicosolar.com>";
	$subject = "Email para $nombre";
		
	$body = "
	Estimado/a $nombre:

	Agradecemos habernos contactado,
	En breve un asesor se estara comunicando con usted.

	Atentamente,
	Ecologico Solar
	";
		
	//to to2
	if (mail($to, $subject, $body, $headers)){
		return 0;
	} else {
		return 1;
	}
}
?>