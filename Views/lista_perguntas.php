<?php
include("php/QuestaoController.php");

$controller = new questaoController();
?>
<main>
    <div class="">
        <div class="header-page">
            <h1>Lista de Perguntas</h1>
        </div>
        <div class="container">
            <form method="post" action="#">
                <div class="row page">
                    <span class="text-cente" style="padding-left: 50%;">Tela Mockup</span>
                </div>
                <div class="row page2">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <table id="myTable" class="table table-striped table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">GRUPO</th>
                                    <th scope="col">PERGUNTA</th>
                                    <th scope="col">RESPOSTA CERTA</th>
                                    <th scope="col">RESP A</th>
                                    <th scope="col">RESP B</th>
                                    <th scope="col">RESP C</th>
                                    <th scope="col">RESP D</th>
                                    <th scope="col">RESP E</th>
                                    <th scope="col">ALTERAR</th>
                                    <th scope="col">DELETAR</th>
                                </tr>
                            </thead>
                            <tbody>

                                    <?php
                                    $results = $controller->listaQuestaos();
                                        foreach ($results as $result) :
                                            echo '<tr>';
                                            echo '<td>' . $result['grupo'] . '</td>';
                                            echo '<td>' . $result['pergunta'] . '</td>';
                                            echo '<td>' . $result['respostaCerta'] . '</td>';
                                            echo '<td>' . $result['respostaA'] . '</td>';
                                            echo '<td>' . $result['respostaB'] . '</td>';
                                            echo '<td>' . $result['respostaC'] . '</td>';
                                            echo '<td>' . $result['respostaD'] . '</td>';
                                            echo '<td>' . $result['respostaE'] . '</td>';
                                            echo '<td> <a href=index.php?pagina=perguntas&id='. $result['id'].'&tipo=Alteracao>Alterar</td>';
                                            echo '<td> <a href=php/deletar.php?id='. $result['id'].'>Delete</td>';
                                            echo '</tr>';
                                        endforeach;
                                    ?>
                            </tbody>
                        </table>
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
