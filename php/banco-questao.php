<?php

function listaQuestaos($conexao) {
    $questoes = array();
    $resultado = mysqli_query($conexao, "select p.*, c.grupo as categoria_grupo from questoes as p join categorias as c on p.resposta = c.id");

    while($produto = mysqli_fetch_assoc($resultado)) {
        array_push($questoes, $produto);
    }

    return $questoes;
}

function insereQuestao($conexao, $grupo, $pergunta, $sequencia, $respostaa,$respostab,$respostac,$respostad,$respostae) {
    $query = "insert into questoes (grupo, pergunta, sequencia, resposta)
        values ('{$grupo}', {$pergunta}, '{$sequencia}', '{$respostaa}', '{$respostab}', '{$respostac}','{$respostad}','{$respostae}')";

    if(mysqli_query($conexao, $query)){
        return true;
    } else {
        return false;
    }
    return false;
}

function alteraQuestao($conexao, $id, $grupo, $pergunta, $sequencia, $respostaa,$respostab,$respostac,$respostad,$respostae) {
    $query = "update questoes set grupo = '{$grupo}', {$pergunta}, '{$sequencia}', '{$respostaa}', '{$respostab}', '{$respostac}',
             '{$respostad}','{$respostae}' where id = '{$id}'";

    if(mysqli_query($conexao, $query)){
        return "Questão alterada com sucesso";
    } else {
        $msg = mysqli_error($conexao);
    }
    return $msg;
}

function removeQuestao($conexao, $id) {
    $query = "delete from questoes where id = {$id}";

    if(mysqli_query($conexao, $query)){
        return "Questão adicionada com sucesso";
    } else {
        $msg = mysqli_error($conexao);
    }
    return $msg;
}

function buscaQuestao($conexao, $id) {
    $query = "select * from questoes where id = {$id}";
    $resultado = mysqli_query($conexao, $query);
    return mysqli_fetch_assoc($resultado);
}
