<template id="TheRegiste">
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-7">
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
                <h5 class="text-center mb-2">
                  Olá
                  <strong><span id="name"></span></strong>
                  , precisamos de mais informações...
                </h5>
              </div>

              <form class="user mt-4" @submit.prevent="handleRegister">
                <div id="tab1">
                  <div class="form-group row">
                   
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-12 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="endereco"
                        v-model="endereco"
                        placeholder="Endereço"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      required
                      class="form-control form-control-user"
                      id="cep"
                      v-model="cep"
                      placeholder="CEP"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="phone"
                        required
                        class="form-control form-control-user"
                        id="telefone1"
                        placeholder="Telefone 1"
                        v-model="telefone1"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="phone"
                        required
                        class="form-control form-control-user"
                        id="telefone2"
                        placeholder="Telefone 2"
                        v-model="telefone2"
                      />
                    </div>
                  </div>

                  <button
                    @click="handleContinue($event)"
                    class="btn btn-success btn-user btn-block"
                  >
                    Proximo
                  </button>
                </div>

                <div id="tab2" hidden>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="cnh"
                        v-model="cnh"
                        placeholder="Digite a sua CNH"
                      />
                    </div>
                     <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="cpf"
                        v-model="cpf"
                        placeholder="Digite seu CPF"
                      />
                    </div>
                  </div>
                 
                  <div class="form-group">
                    <input
                      type="text"
                      required
                      class="form-control form-control-user"
                      id="marca"
                      v-model="marca"
                      placeholder="Qual a marca da sua moto?"
                    />
                  </div>
                    <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="modelo"
                        v-model="modelo"
                        placeholder="Digite o modelo da sua moto?"
                      />
                    </div>
                     <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="ano"
                        v-model="ano"
                        placeholder="Qual o ano da sua moto?"
                      />
                    </div>
                  </div>
                

                  <button
                    type="submit"
                    class="btn btn-success btn-user btn-block"
                  >
                    Salvar
                  </button>
                  <button
                    @click="handleBack($event)"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Voltar
                  </button>
                </div>
              </form>
              <hr />
            </div>
          </div>
          <div
            class="col-lg-5 d-none d-lg-block bg-register-image-perfil"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../services/auth/index'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'TheRegister',
  data() {
    return {
      segmentos: [],
    }
  },
  mounted() {
    let token = localStorage.getItem('token')
    let decode = VueJwtDecode.decode(token)

    let firstName = decode.nome
    let lastName = decode.sobrenome

    let fullname = firstName + ' ' + lastName

    document.getElementById('name').innerHTML = fullname

    api
      .list()
      .then((resposta) => {
        this.segmentos = resposta.data.response
      })
      .catch((err) => console.log(err))
  },
  methods: {
    handleContinue(event) {
      document.querySelector('#tab1').hidden = true
      document.querySelector('#tab2').hidden = false
    },

    handleBack(event) {
      document.querySelector('#tab1').hidden = false
      document.querySelector('#tab2').hidden = true
    },

    async handleRegister() {
      let token = localStorage.getItem('token')
      let decode = VueJwtDecode.decode(token)
      let youId = decode.id_users
      let youEndereco = document.getElementById('endereco').value
      let youCep = document.getElementById('cep').value
      let youTelefone1 = document.getElementById('telefone1').value
      let youTelefone2 = document.getElementById('telefone2').value
      let youCnh = document.getElementById('cnh').value
      let youCpf = document.getElementById('cpf').value
      let youMarca = document.getElementById('marca').value
      let youModelo = document.getElementById('modelo').value
      let youAno = document.getElementById('ano').value
      let youStatus = 1

       await api.entregador(
        youId,
        youEndereco,
        youCep,
        youTelefone1,
        youTelefone2,
        youCnh,
        youCpf,
        youMarca,
        youModelo,
        youAno,
      )
       await api.statusUser(youStatus, youId).then((resposta) => {
       console.log(resposta)
       })
    },
  },
}
</script>
