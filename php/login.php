<?php
include("conecta.php");
include ("banco-usuario.php");
include ("controllerUser.php");

$usuario = buscaUsuario($conexao, $_POST["email"], $_POST["senha"]);

if($usuario == null) {
    header("Location: ../index.php?pagina=login");
} else {
    logaUsuario($usuario["email"]);
    header("Location: ../index.php?pagina=perfil");
}
die();
