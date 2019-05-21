<?php

function buscaUsuario($conexao, $email, $senha) {
    $senhaMd5 = md5($senha);
    $query = "select * from usuarios where email='{$email}' and senha='{$senhaMd5}'";
    $resultado = mysqli_query($conexao, $query);
    $usuario = mysqli_fetch_assoc($resultado);
    return $usuario;
}

function cadastraUsuario($conexao, $nome, $sobrenome, $email, $senha){
    $senhaMd5 = md5($senha);
    $query = "insert into usuarios (nome, sobrenome, email, senha) values ('{$nome}', '{$sobrenome}', '{$email}', '{$senhaMd5}')";

    if(mysqli_query($conexao, $query)){
        return true;
    } else {
        return false;
    }
}