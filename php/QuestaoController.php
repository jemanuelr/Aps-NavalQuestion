<?php
include 'conecta.php';

class questaoController{

    private $banco;

    function __construct()
    {
     $this->banco = new conecta('naval_question');
     }

    /**
     * Metodo busca e retorna todas as questões do banco
     *
     * @return array
     */
    function listaQuestaos() {

        $sql = "SELECT * FROM questoes";
        $questoes = array();
        $resultado = mysqli_query($this->banco->getCon(), $sql);

        while($questao = mysqli_fetch_assoc($resultado)) {
            array_push($questoes, $questao);
        }

        return $questoes;
    }

    /**
     * Metodo insere as questões no banco
     *
     * @param $grupo
     * @param $pergunta
     * @param $respostaCerta
     * @param $respostaA
     * @param $respostaB
     * @param $respostaC
     * @param $respostaD
     * @param $respostaE
     * @return bool
     */
    function insereQuestao($grupo, $pergunta, $respostaCerta, $respostaA, $respostaB, $respostaC, $respostaD, $respostaE)
    {

        $sql = "INSERT INTO questoes(grupo, pergunta, respostaCerta, respostaA, respostaB, respostaC, respostaD, respostaE)"
            . "VALUES(?,?,?,?,?,?,?,?)";

        $stmt = mysqli_prepare($this->banco->getCon(), $sql);

        if (!$stmt->bind_param("ssssssss", $grupo,$pergunta, $respostaCerta, $respostaA, $respostaB, $respostaC, $respostaD, $respostaE)) {
            die("Falha na atribuicao de valores");
            return false;
        } else {
            $stmt->execute();
            return true;
        }
    }

    function alteraQuestao($id, $grupo, $pergunta, $respostaCerta, $respostaA, $respostaB, $respostaC, $respostaD, $respostaE)
    {

        $sql = "UPDATE questoes SET grupo=?,pergunta=?,respostaCerta=?,respostaA=?,respostaB=?,respostaC=?,respostaD=?,respostaE=? "
                . "WHERE id = ? ";

        $stmt = mysqli_prepare($this->banco->getCon(), $sql);
        if (!$stmt->bind_param("sssssssss", $grupo,$pergunta, $respostaCerta, $respostaA, $respostaB, $respostaC, $respostaD, $respostaE, $id)) {
            die("Falha na atribuicao de valores");
            return false;
        } else {
            $stmt->execute();
            return true;
        }

    }

    function removeQuestao($id)
    {
        $sql = "delete from questoes where id = ?";

        $stmt = mysqli_prepare($this->banco->getCon(), $sql);

        if (!$stmt->bind_param("s", $id)) {
            die("Falha na atribuicao de valores");
            return false;
        } else {
            $stmt->execute();
            return true;
        }
    }

    function buscaQuestao($conexao, $id)
    {
        $query = "select * from questoes where id = {$id}";
        $resultado = mysqli_query($conexao, $query);
        return mysqli_fetch_assoc($resultado);
    }
}