<?php

function usuarioEstaLogado() {
    return isset($_SESSION["logado"]);
}

function verificaUsuario() {
    if(!usuarioEstaLogado()) {
        header("Locatio n: index.php?falhaDeSeguranca=true");
        die();
    }
}

function usuarioLogado() {
    return $_SESSION["logado"];
}

function logaUsuario($email) {
    session_start();
    $_SESSION["usuario_logado"] =  $email;
}

function logout(){
    session_destroy();
}