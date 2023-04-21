<template id="TheRegiste">
    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">
                                    <img src="../../assets/img/logo1.jpeg" style="width: 200px;" class="img-fluid" alt="" />
                                </h1>
                            </div>
                            <form class="user" @submit.prevent="handleRegister">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" required class="form-control form-control-user" id="nome" v-model="nome" placeholder="Primeiro nome" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" required class="form-control form-control-user" id="sobrenome" v-model="sobrenome" placeholder="Seu sobrenome" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" required class="form-control form-control-user" id="email" v-model="email" placeholder="Digite seu melhor e-mail" />
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" required class="form-control form-control-user" id="senha" placeholder="Digite uma senha" v-model="senha" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" required class="form-control form-control-user" id="doubleSenha" placeholder="Repita essa senha" v-model="doubleSenha" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-12 mb-3 mb-sm-0">
                                        <select class="form-select form-control-user" id="escolha" style="width: 100%; height: auto; boder-color: #e1e1e1 !important;">
                                          <option selected disabled>Escolha aqui seu perfil</option>
                                          <option value="2">Comércio</option>
                                          <option value="3">Entregador</option>
                                        </select>
                                    </div>
                                </div>
    
                                <div class="alert alert-success mt-3 text-center" role="alert" hidden id="mensagem">
                                    <i class="fa fa-check"></i> Cadastro realizado com sucesso
                                </div>
    
                                <button type="submit" class="btn btn-primary btn-user btn-block">
                                      Cadastre-me
                                    </button>
                            </form>
                            <hr />
                            <div class="text-center">
                                <a class="small" href="#">Perdeu a senha?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="/">Já tem uma conta? Login!</a>
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
    name: 'TheRegister',
    methods: {
        async handleRegister() {
            let youNome = document.getElementById('nome').value
            let youSobrenome = document.getElementById('sobrenome').value
            let youEmail = document.getElementById('email').value
            let youPass = document.getElementById('senha').value
            let youNivel = document.getElementById('escolha').value
            let msg = document.getElementById('mensagem')

            await api.cadastro(youNome, youSobrenome, youEmail, youPass, youNivel)

            msg.hidden = false
  
           
        },
    }
}
</script>
