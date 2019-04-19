<?php


$host = "navalquestion.mysql.dbaas.com.br";
$usuario = "navalquestion";
$senha = "jorge@20";
$base = "naval_question";


echo($host)."<br>"
echo($usuario)."<br>"
echo($senha)."<br>"
echo($base)."<br>"
    exit;
$con = mysql_connect($host,$usuario,$senha,$base);

if(!$con){
    echo "Erro: Falha ao conectar com o banco de dados.".PHP_EOL;
    echo "Debugging error: " .mysqli_connect_error(). PHPEOL;
    exit;
}else
{
    echo "Sucesso: Sucesso ao conectar com a base de dados MySql.".PHP_EOL;

}

$query = "SELECT * FROM";
$consulta = mysql_query($con,$query);