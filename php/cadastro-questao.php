<?php

include ("conecta.php");
include ("banco-questao.php");

$resultado = insereQuestao($conexao,$_POST["grupo"],$_POST["pergunta"], $_POST["sequencia"], $_POST["respostaa"],$_POST["respostab"],$_POST["respostac"],
    $_POST["respostad"],$_POST["respostae"]);

if($resultado){
    header("Location: ../index.php?pagina=perfil");
} else {
    header("Location: ../index.php?pagina=cadastro");
}
die();