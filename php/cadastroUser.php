<?php

include ("conecta.php");
include("UserController.php");
include ("controllerUser.php");

$cone = new questaoController();

$resultado = cadastraUsuario($cone, $_POST["nome"], $_POST["sobrenome"], $_POST["email"], $_POST["senha"]);

if($resultado){
    logaUsuario($usuario["email"]);
    header("Location: ../index.php?pagina=home");
} else {
    header("Location: ../index.php?pagina=cadastro");
}
die();