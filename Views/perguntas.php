<main>
    <div class="">
        <div class="header-page">
            <h1>Cadastrar Pergunta</h1>
        </div>
        <div class="container ">
            <form action="/php/cadastro-questao.php" method="post"">
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
                                            <option>Selecione opção</option>
                                            <option>PHP</option>
                                            <option>HTML</option>
                                            <option>CSS</option>
                                            <option>JAVASCRIPT</option>
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
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <label>Número perguntas</label>
                                        <select class="form-control" name="sequencia">
                                            <option>Selecione opção</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <!-- Resposta da pargunta -->
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <label>Resposta correta</label>
                                        <select class="form-control" name="resposta">
                                            <option>Selecione opção</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 mt-5 ">
                                        <div class="float-right">
                                            <button type="button" class="btn btn-outline-primary">Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 ">
                        <div class="card bg-naval page-body-right">
                            <div class="card-header">
                                <h3>Perguntas:</h3>
                            </div>
                            <div class="card-body">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">A</label>
                                        <input type="email" class="form-control" id="pergA" placeholder="Resposta A", name="respostaa">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">B</label>
                                        <input type="email" class="form-control" id="pergB" placeholder="Resposta B" name="respostab">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">C</label>
                                        <input type="email" class="form-control" id="pergC" placeholder="Resposta C" name="respostac">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">D</label>
                                        <input type="email" class="form-control" id="pergD" placeholder="Resposta D" name="respostad">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">E</label>
                                        <input type="email" class="form-control" id="pergE" placeholder="Resposta E" name="respostae">
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
