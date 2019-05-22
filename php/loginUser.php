<?php
include("conecta.php");
include("UserController.php");
include ("controllerUser.php");

$cone = new userController();

$usuario = $cone->buscaUsuario($_POST["email"], $_POST["senha"]);

if($usuario == null) {
    header("Location: ../index.php?pagina=login");
} else {
    logaUsuario($usuario["email"]);
    header("Location: ../index.php?pagina=perfil");
}
die();
