<main>
    <div class="">
        <div class="header-page">
            <h1>Jogo</h1>
        </div>
        <div class="container">
            <form method="post" action="#">
                <div class="row page-jogo">
                    <div class="col-sm-12 col-md-12 col-lg-12">
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
        $('.dropdown-toggle').dropdown();
        /* Função para desenhar o plano cartesiano */
        showGrid(true);
        var gridx = 16,
            gridy = 16;

        function showGrid(ispc) {
            var y, x;
            for (y = 0; y < gridy; ++y) {
                for (x = 0; x < gridx; ++x) {
                    if (ispc)
                        document.write('<a href="javascript:gridClick(' + y + ',' + x + ');"><img name="pc' + y + '_' + x + '" src="../img/batt100.gif" width=16 height=16></a>');
                    else
                        document.write('<a href="javascript:void(0);"><img name="ply' + y + '_' + x + '" src="batt' + player[y][x][0] + '.gif" width=16 height=16></a>');
                }
                document.write('<br>');
            }
        }

        /* Função para os cliques no plano cartesiano */
        function gridClick(y, x) {
            if (playflag) {
                if (computer[y][x][0] < 100) {
                    setImage(y, x, 103, true);
                    var shipno = computer[y][x][1];
                    if (--computersships[shipno][1] == 0) {
                        sinkShip(computer, shipno, true);
                        alert("Voce afundou meu " + shiptypes[computersships[shipno][0]][0] + "!");
                        updateStatus();
                        if (--computerlives == 0) {
                            alert("Voce venceu! Aperte o F5\n" +
                                "no seu navegador para jogar novamente.");
                            playflag = false;
                        }
                    }
                    if (playflag) computerMove();
                } else if (computer[y][x][0] == 100) {
                    setImage(y, x, 102, true);
                    computerMove();
                }
            }
        }
    })());

</script>
