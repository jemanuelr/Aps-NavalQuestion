<?php

include ("conecta.php");
include ("banco-usuario.php");
include ("controllerUser.php");

$resultado = cadastraUsuario($conexao,$_POST["nome"], $_POST["sobrenome"], $_POST["email"], $_POST["senha"]);

if($resultado){
    logaUsuario($usuario["email"]);
    header("Location: ../index.php?pagina=perfil");
} else {
    header("Location: ../index.php?pagina=cadastro");
}
die();