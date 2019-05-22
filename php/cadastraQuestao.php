<?php
include("QuestaoController.php");
session_start();
$tipo = $_SESSION['tipo_usuario'];
$id = $_SESSION['id_usuario'];
$grupo = $_POST["grupo"];
$pergunta = $_POST["pergunta"];
//$nRespostas = $_POST["nRespostas"];
$respostaCerta = $_POST["respostaCerta"];
$respostaA = $_POST["respostaA"];
$respostaB = $_POST["respostaB"];
$respostaC = $_POST["respostaC"];
$respostaD = $_POST["respostaD"];
$respostaE = $_POST["respostaE"];

$cone = new questaoController();

if($tipo === 'Alteracao') {
    $resultado = $cone->insereQuestao($grupo, $pergunta, $respostaCerta, $respostaA, $respostaB, $respostaC, $respostaD, $respostaE);
}else {
    $resultado = $cone->alteraQuestao($id, $grupo, $pergunta, $respostaCerta, $respostaA, $respostaB, $respostaC, $respostaD, $respostaE);
}

if($resultado){
    header("Location: ../index.php?pagina=lista");
} else {
    header("Location: ../index.php?pagina=perguntas");
}
die();