<?php
//include 'db.php';
include("php/controllerUser.php");

session_start();
unset($_SESSION['logado']);
$_SESSION['logado'] = false;

if(isset($_GET['pagina'])){
    $pagina = $_GET['pagina'];
    
    if($pagina == "perguntas" || $pagina == "lista" || $pagina == "perfil" || $pagina == "mapa"){
      $_SESSION['logado'] = true;
    }else{
     $_SESSION['logado'] = false;
    }
}
else{
    $pagina = "home";
}

include 'Views/header.php';
    switch($pagina){
        case 'cadastro':
            include 'Views/cadastro.php';
            break;
        case 'login':
          include 'Views/login.php';
            break;
        case 'perguntas':
              include 'Views/perguntas.php';
            break;
        case 'lista':
            include 'Views/lista_perguntas.php';
            break;
         case 'perfil':
            include 'Views/perfil.php';
            break;
         case 'mapa':
            include 'Views/mapa.php';
            break;
        default: 
    include 'Views/home.php'; break;
    }

include 'Views/footer.php';
