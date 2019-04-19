<main>
    <div class="">
        <div class="header-page">
            <h1>Perfil</h1>
        </div>
        <div class="container">
            <form method="post" action="#">
                <div class="row">
                    <div class="col-sm-4 col-md-6 col-lg-6 ">
                        <a href="index.php?pagina=perguntas">
                            <div class="card mb-3 card-menu float-right">
                                <div class="card-header">
                                    <h5 class="card-title text-center">Questões</h5>
                                    <p class="card-text text-center">Cadastrar questões</p>
                                </div>
                                <div class="card-body text-primary flex-centralizado">
                                    <span class="icon-fa2"><i class="fas fa-folder-plus"></i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-4 col-md-6 col-lg-6">
                        <a href="index.php?pagina=lista">
                            <div class="card mb-3 card-menu float-left">
                                <div class="card-header">
                                    <h5 class="card-title text-center">Questões</h5>
                                    <p class="card-text text-center">Lista de questões</p>
                                </div>
                                <div class="card-body text-primary flex-centralizado">
                                    <span class="icon-fa2"><i class="fas fa-list-ol"></i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>

<script>
    ((function() {
        $(document).ready(function() {
            $('body').removeClass('img-home');
            $('body').removeClass('img-login-cadastro');
            $('body').addClass('scroll');
        });
    })());
    $('.dropdown-toggle').dropdown();

</script>
