<main>
    <div class="container home">
        <div class="d-flex justify-content-center h-100">
            <div class="card-login">
                <div class="card-header">
                    <h3>Login</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div class="card-body card-body-p">
                    <form>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="username">

                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="password">
                        </div>
                        <div class="row align-items-center remember">
                            <input type="checkbox">Lembre-me
                        </div>
                        <div class="form-group">
                            <!---<input type="submit" value="Login" class="btn float-right login_btn">--->
                            <a href="index.php?pagina=perfil" class="btn float-right login_btn">Login</a>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Não tem uma conta?<a href="index.php?pagina=cadastro">Inscrever-se</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">Esqueci minha senha!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
    ((function() {
        $(document).ready(function() {
            $('body').removeClass('img-homeS');
            $('body').addClass('img-login-cadastro');
        });
    })());

</script>
