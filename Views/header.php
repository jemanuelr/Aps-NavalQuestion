<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="">
    <meta name="description" content="APS-Desenvolvimento-Web-Anhembi">
    <meta name="author" content="Jorge Emanuel">

    <title>NavalQuestions</title>

    <link rel="stylesheet" href="Fonts/fontawesome-free-5.8.1-web/css/all.css" />
    <link rel="stylesheet" href="Css/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="Css/bulma.css" />
    <link rel="stylesheet" href="Css/style.css?v=201-04-17b" />

    <script src="Scripts/jquery-1.9.0.js"></script>
    <script src="Scripts/bootstrap/bootstrap.min.js"></script>
    <script src="Scripts/bootstrap/bootstrap.js"></script>
    <script src="Scripts/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="../Scripts/datatable.js"></script>
</head>

<body class="img-home">
    <header>
        <nav class="navbar navbar-expand-lg main-menu">
            <div class="img-menu">
                <a class="navbar-brand" href="index.php?pagina=home" data-toggle="tooltip" data-placement="bottom" title="Logo NavalQuestion">
                    <img src="img/logo.png" role="logo-naval-question" />
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navMenuPrincipal">
                <?php 
               if (isset($_SESSION['logado']) && empty($_SESSION['logado'])){?>
                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Login">
                        <a class=" nav-link txt-menu text-sm-left text-md-left" href="index.php?pagina=login">Login</a>
                    </li>
                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Cadastrar">
                        <a class="nav-link txt-menu text-sm-left text-md-left" href="index.php?pagina=cadastro">Cadastro</a>
                    </li>
                </ul>
                <?php 
                }
                else{?>
                <ul class="navbar-nav ml-md-auto" visible="false">

                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Mapa Jogo">
                        <a class="nav-link" href="index.php?pagina=mapa"><span class="icon-menu-principal"><i class="fas fa-circle-notch"></i></span></a>
                    </li>
                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Cadastro de perguntas">
                        <a class="nav-link" href="index.php?pagina=perguntas"><span class="icon-menu-principal"><i class="fas fa-folder-plus"></i></span></a>
                    </li>
                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Lista de perguntas">
                        <a class="nav-link" href="index.php?pagina=login"><span class="icon-menu-principal"><i class="fas fa-list-ol"></i></span></a>
                    </li>
                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Home">
                        <a class="nav-link" href="index.php?pagina=perfil"><span class="icon-menu-principal"><i class="fas fa-user-circle"></i></span></a>
                    </li>
                    <li class="nav-item active" data-toggle="tooltip" data-placement="bottom" title="logoff">
                        <a class="nav-link" href="#"><span class="icon-menu-principal"><i class="fas fa-power-off"></i></span></a>
                    </li>
                </ul>
                <?php }?>
            </div>
        </nav>
    </header>
    <script type="text/javascript">
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        });

    </script>
