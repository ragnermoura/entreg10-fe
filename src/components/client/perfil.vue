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
                    <div class="col-sm-12 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="razao"
                        v-model="razao"
                        placeholder="Razão Social"
                      />
                    </div>
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
                    <div class="col-sm-12 mb-3 mb-sm-0">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="cnpj"
                        v-model="razao"
                        placeholder="Digite seu CNPJ"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-12 mb-3 mb-sm-0">
                      <select
                        type="text"
                        style="width: 100%; height: 30px;"
                        required
                        class="form-select form-control-user"
                        id="segmento"
                       
                      >
                      
                        <option value="">Escolha o seu segmento</option>
                        <option v-for="segmento in segmentos" :key="index" :value="segmento.id_segmento">{{segmento.label}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      required
                      class="form-control form-control-user"
                      id="site"
                      v-model="site"
                      placeholder="Qual seu website?"
                    />
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
      let youRazao = document.getElementById('razao').value
      let youEndereco = document.getElementById('endereco').value
      let youCep = document.getElementById('cep').value
      let youTelefone1 = document.getElementById('telefone1').value
      let youTelefone2 = document.getElementById('telefone2').value
      let youSegmento = document.getElementById('segmento').value
      let youCnpj = document.getElementById('cnpj').value
      let youWebsite = document.getElementById('site').value
      let youStatus = 1

       await api.empresa(
        youId,
        youRazao,
        youEndereco,
        youCep,
        youTelefone1,
        youTelefone2,
        parseInt(youSegmento),
        youCnpj,
        youWebsite,
        youStatus
      )
       await api.statusUser(youStatus, youId).then((resposta) => {
       console.log(resposta)
       })
    },
  },
}
</script>
