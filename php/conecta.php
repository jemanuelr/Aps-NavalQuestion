<?php

class Conecta {

    private $con;

    function __construct($dbnome) {
        $server = "localhost";
        $user = "root";
        $pass = "";

        $this->con = new mysqli($server, $user, $pass, $dbnome);

        if ($this->con->connect_error) {
            die("<h1>Falha na Conexao com o BD</h1>");
        }
    }

    public function getCon() {
        return $this->con;
    }

    public function __destruct() {
        $this->con->close();
    }

}
