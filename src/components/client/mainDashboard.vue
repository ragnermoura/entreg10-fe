<template id="TheMain">
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <div class="sidebar-brand-text mx-3">
          <img
            src="../../assets/img/logo.png"
            style="width: 200px"
            class="img-fluid"
            alt=""
          />
        </div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="/#/dashboard-client">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />
    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
          <!-- Sidebar Toggle (Topbar) -->
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                  <span id="name"></span>
                </span>
                <img
                  class="img-profile rounded-circle"
                  src="../../assets/img/undraw_profile.svg"
                />
              </a>
              <!-- Dropdown - User Information -->
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                  ></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->

          <div class="row">
            <div class="col-lg-3">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-check"></i>
                    Total de pedidos Realizados
                  </h6>
                </div>
                <div class="card-body">
                  <h1 class="text-center"><strong>051</strong></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-warning">
                    <i class="fa fa-check"></i>
                    Pedidos hoje
                  </h6>
                </div>
                <div class="card-body">
                  <h1 class="text-center"><strong>000</strong></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-info">
                    <i class="fa fa-check"></i>
                    Pedido esta semana
                  </h6>
                </div>
                <div class="card-body">
                  <h1 class="text-center"><strong>000</strong></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-secondary">
                    <i class="fa fa-check"></i>
                    Pedidos este Mês
                  </h6>
                </div>
                <div class="card-body">
                  <h1 class="text-center"><strong>000</strong></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fa fa-plus"></i>
                    Novo Pedido
                  </h6>
                </div>
                <div class="card-body">
                  <form class="user" @submit.prevent="handlePedido">
                    <div class="form-group row">
                      <div class="col-sm-12 mb-3 mb-sm-0">
                        <input
                          type="text"
                          required
                          class="form-control form-control-user"
                          id="nome"
                          v-model="nome"
                          placeholder="Nome do Cliente"
                        />
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="endereco"
                        v-model="endereco"
                        placeholder="Qual o endereço da entrega?"
                      />
                    </div>
                      </div>
                      <div class="col-md-3"> <div class="form-group">
                      <input
                        type="number"

                        required
                        class="form-control form-control-user"
                        id="numero"
                        v-model="numero"
                        placeholder="Número"
                      />
                    </div></div>
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="cep"
                        v-model="cep"
                        @input="buscarEndereco"
                        placeholder="Digite o CEP da entrega"
                      />
                    </div>
                   
                    <div class="form-group">
                      <input
                        type="text"
                        required
                        class="form-control form-control-user"
                        id="telefone"
                        maxlength="11"
                        v-model="telefone"
                        placeholder="Qual o telefone do cliente?"
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          required
                          class="form-control form-control-user"
                          id="valor"
                          placeholder="Valor do Pedido"
                          v-model="senha"
                        />
                      </div>
                      <div class="col-sm-2 mt-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            value="Cartão"
                            v-model="opcaoEscolhida"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Cartão
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-2 mt-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="Dinheiro"
                            v-model="opcaoEscolhida"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Dinheiro
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-2 mt-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="Pago"
                            v-model="opcaoEscolhida"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Pago
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      class="alert alert-success mt-3 text-center"
                      role="alert"
                      hidden
                      id="mensagem"
                    >
                      <i class="fa fa-check"></i>
                      Cadastro realizado com sucesso
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Fazer pedido
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-2"></div>

            <div class="col-lg-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fa fa-list"></i>
                    Meus Pedidos
                  </h6>
                </div>
                <div class="card-body" style="height: 415px; overflow-y: auto">
                  <div class="table-responsive">
                    <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Cliente</th>
                          <th>Endereço</th>
                          
                          <th>Telefone</th>
                          <th>Status</th>
                          <th>Valor</th>
                          <th>Método</th>
                          <th>Entregador</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr v-for="pedido in pedidos" :key="pedido.idpedidos">
                          <td>{{ pedido.nome_cliente }}</td>
                          <td>{{ pedido.endereco_entrega }}</td>
                          <td>{{ pedido.telefone1 }}</td>
                          <td v-if="pedido.id_status == 4">
                            <span class="badge bg-warning text-white">
                              Aguardando
                            </span>
                          </td>
                          <td v-if="pedido.id_status == 10">
                            <span class="badge bg-info text-white">
                              Em andamento
                            </span>
                          </td>
                          <td v-if="pedido.id_status == 5">
                            <span class="badge bg-success text-white">
                              Entregue
                            </span>
                          </td>
                          <td>R$ {{ pedido.valor_pedido }}</td>
                          <td>{{ pedido.metodo_pagamento }}</td>
                          <td>{{ pedido.nome }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Entreg10</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div
    class="modal fade"
    id="logoutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Deseja realmente sair?
          </h5>
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          Escolha "Logout" abaixo se deseja encerra a sessão.
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">
            Cancelar
          </button>
          <a @click="handleOff()" class="btn btn-primary">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../../services/pedido/index";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "TheMain",
  data() {
    return {
      cep: "",
      endereco: "",
      opcaoEscolhida: "",
      pedidos: [],
    };
  },

  mounted() {
    let token = localStorage.getItem("token");
    let decode = VueJwtDecode.decode(token);

    let firstName = decode.nome;
    let lastName = decode.sobrenome;

    let fullname = firstName + " " + lastName;

    document.getElementById("name").innerHTML = fullname;

    if(decode.id_nivel == 3){
      window.location.href = "/"
    }

    api
      .meusPedidos()
      .then((resposta) => {
        this.pedidos = resposta.data.response;

        console.log(this.pedidos);
      })
      .catch((err) => console.log(err));
  },

  methods: {
    async buscarEndereco() {
      if (this.cep.length === 8) {
        const url = `https://viacep.com.br/ws/${this.cep}/json/`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.erro) {
            console.error("CEP não encontrado");
          } else {
            this.endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
          }
        } catch (error) {
          console.error("Erro ao buscar CEP", error);
        }
      }
    },

    handleOff() {
      localStorage.clear();
      window.location.href = "/";
    },

    async handlePedido() {
      let token = localStorage.getItem("token");
      let decode = VueJwtDecode.decode(token);
      let youId = decode.id_users;

      let youNome = document.getElementById("nome").value;
      let youCep = document.getElementById("cep").value;
      let youEndereco = document.getElementById("endereco").value;
      let youNumero = document.getElementById("numero").value;
      let youTelefone = document.getElementById("telefone").value;
      let youValor = document.getElementById("valor").value;
      let youType = this.opcaoEscolhida;
      let youStatus = 3;

      await api.pedido(
        youId,
        youNome,
        youCep,
        youEndereco,
        youNumero,
        youTelefone,
        youValor,
        youType,
        youStatus
      );
    },
  },
};
</script>
