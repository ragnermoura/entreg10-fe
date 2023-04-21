<template id="TheLogin">
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                      <img
                        src="../../assets/img/logo1.jpeg"
                        style="width: 200px;"
                        class="img-fluid"
                        alt=""
                      />
                    </h1>
                  </div>
                  <form class="user" @submit.prevent="handleLogin">
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="form-control form-control-user"
                        aria-describedby="emailHelp"
                        placeholder="Seu e-mail"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="senha"
                        v-model="senha"
                        class="form-control form-control-user"
                        placeholder="Sua senha"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck">
                          Lembre-me
                        </label>
                      </div>
                    </div>
                    <button
                      
                      type="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </button>
                    <div
                      class="alert alert-warning mt-3 text-center"
                      id="mensagem"
                      role="alert" hidden
                    >
                      Dados errados. Tente novamente.
                    </div>
                    <hr />
                    <a
                      href="#"
                      class="btn btn-google btn-user btn-block"
                    >
                      <i class="fab fa-google fa-fw"></i>
                      Login com Google
                    </a>
                    <a
                      href="#"
                      class="btn btn-facebook btn-user btn-block"
                    >
                      <i class="fab fa-facebook-f fa-fw"></i>
                      Login com Facebook
                    </a>
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class="small" href="forgot-password.html">
                      Perdeu a senha?
                    </a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="/cadastro">
                      Crie uma nova conta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../services/auth/index'
export default {
  name: 'TheLogin',

  methods: {
    async handleLogin() {
      let youEmail = document.getElementById('email').value
      let youPass = document.getElementById('senha').value
      let msg = document.getElementById('#mensagem')

      await api.login(youEmail, youPass)
    },
  },
}
</script>
