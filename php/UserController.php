<?php

include ("php/conecta.php");

class userController{

    private $banco;

    function __construct()
    {
        $this->banco = new conecta('naval_question');
    }

    function buscaUsuario($email, $senha) {
        $senhaMd5 = md5($senha);
        $query = "select * from usuarios where email='{$email}' and senha='{$senhaMd5}'";
        $resultado = mysqli_query($this->banco->getCon(), $query);
        $usuario = mysqli_fetch_assoc($resultado);
        return $usuario;
    }

    function cadastraUsuario($nome, $sobrenome, $email, $senha){
        $senhaMd5 = md5($senha);
        $query = "insert into usuarios (nome, sobrenome, email, senha) values ('{$nome}', '{$sobrenome}', '{$email}', '{$senhaMd5}')";

        if(mysqli_query($this->banco->getCon(), $query)){
            return true;
        } else {
            return false;
        }
    }
}