<?php
include("QuestaoController.php");

$controller = new questaoController();

$id = $_GET['id'];

$controller->removeQuestao($id);

header("Location: ../index.php?pagina=lista");

