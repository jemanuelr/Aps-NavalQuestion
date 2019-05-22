<?php
if(!isset($_SESSION)){
    session_start();
}
$id = $_GET['id'];
$tipoUsua = $_GET['tipo'];
$_SESSION['id_usuario'] = $id;
$_SESSION['tipo_usuario'] = $tipoUsua;
?>

<main>
    <div class="">
        <div class="header-page">
            <h1>Cadastrar Pergunta</h1>
        </div>
        <div class="container ">
            <form action="php/cadastraQuestao.php" method="post">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 ">
                        <div class="card bg-naval page-body-left">
                            <div class="card-header">
                                <h3>Questão:</h3>
                            </div>
                            <div class="card-body left-card">
                                <!-- Grupo da pargunta -->
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <label>Grupo da pergunta</label>
                                        <select class="form-control form-control-lg" name="grupo">
                                            <option value="sem grupo">Selecione opção</option>
                                            <option value="php">PHP</option>
                                            <option value="html">HTML</option>
                                            <option value="css">CSS</option>
                                            <option value="js">JAVASCRIPT</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Pergunta -->
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 mt-5">
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Descrição da questão</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="pergunta"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <!-- Sequencia da pargunta -->
                                <div class="row mt-3">
<!--                                    <div class="col-sm-12 col-md-6 col-lg-6">-->
<!--                                        <label>Número perguntas</label>-->
<!--                                        <select class="form-control" name="sequencia">-->
<!--                                            <option value="erro">Selecione opção</option>-->
<!--                                            <option value="1">1</option>-->
<!--                                            <option value="2">2</option>-->
<!--                                            <option value="3">3</option>-->
<!--                                            <option value="4">4</option>-->
<!--                                            <option value="5">5</option>-->
<!--                                        </select>-->
<!--                                    </div>-->
                                    <!-- Resposta da pargunta -->
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <label>Resposta correta</label>
                                        <select class="form-control" name="respostaCerta">
                                            <option>Selecione opção</option>
                                            <option value="a">A</option>
                                            <option value="b">B</option>
                                            <option value="c">C</option>
                                            <option value="d">D</option>
                                            <option value="e">E</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 mt-5 ">
                                        <div class="float-right">
                                            <!-- <button type="button" class="btn btn-outline-primary">Salvar</button> -->

                                            <?php
                                            if($tipoUsua === 'Alteracao') {
                                            ?>
                                            <input type="submit" value="Salvar" class="btn btn-outline-primary">
                                            <?php
                                            }else {?>
                                                <input type="submit" value="Alterar" class="btn btn-outline-primary">
                                                <?php
                                            }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 ">
                        <div class="card bg-naval page-body-right">
                            <div class="card-header">
                                <h3>Respostas:</h3>
                            </div>
                            <div class="card-body">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">A</label>
                                        <input type="text" class="form-control" id="pergA" placeholder="Resposta A", name="respostaA">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">B</label>
                                        <input type="text" class="form-control" id="pergB" placeholder="Resposta B" name="respostaB">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">C</label>
                                        <input type="text" class="form-control" id="pergC" placeholder="Resposta C" name="respostaC">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">D</label>
                                        <input type="text" class="form-control" id="pergD" placeholder="Resposta D" name="respostaD">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">E</label>
                                        <input type="text" class="form-control" id="pergE" placeholder="Resposta E" name="respostaE">
                                    </div>
                                </div>
                            </div>
                        </div>
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
