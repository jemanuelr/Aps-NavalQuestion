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
                                    <th scope="col">#</th>
                                    <th scope="col">Questão</th>
                                    <th scope="col">Perg A</th>
                                    <th scope="col">Perg B</th>
                                    <th scope="col">Perg C</th>
                                    <th scope="col">Perg D</th>
                                    <th scope="col">Perg E</th>
                                    <th scope="col">Resp Correta</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>A respeito da JSP (JavaServer Pages), assinale a opção correta.</td>
                                    <td>As páginas JSP compiladas não precisam ser executadas em uma máquina virtual Java (JVM).</td>
                                    <td>O scriptlet é o conteúdo integral de um trecho de código Java que esteja dentro das tags </td>
                                    <td>O comando avalia uma expressão e insere o seu resultado na saída, podendo o conteúdo do atributo value ser dinâmico como um texto literal ou uma expressão escrita.</td>
                                    <td>O método POST do HTML não pode ser utilizado para enviar ou receber dados.</td>
                                    <td>Uma página criada com a tecnologia JSP, depois de instalada em um servidor de aplicação compatível, estará pronta para ser executada, não havendo a necessidade de ela ser transformada em um Servlet.</td>
                                    <td>A</td>
                                </tr>
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
