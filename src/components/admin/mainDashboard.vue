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
      <li class="nav-item active">
        <a class="nav-link" href="/#/dashboard-admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span> Dashboard</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />
      <li class="nav-item">
        <a class="nav-link" href="/#/list-entregadores">
          <i class="fas fa-motorcycle"></i>
          <span> Entregadores</span>
        </a>
      </li>
      <hr class="sidebar-divider" />
      <li class="nav-item">
        <a class="nav-link" href="/#/list-clientes">
          <i class="fa fa-store"></i>
          <span> Clientes</span>
        </a>
      </li>
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
          <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>
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
            <div class="col-lg-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fa fa-list"></i>
                    Pedidos (Em aberto)
                  </h6>
                </div>
                <div class="card-body" style="height: auto; overflow-y: auto">
                  <div class="table-responsive">
                    <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Empresa</th>
                          <th>Cliente</th>
                          <th>Endereço de entrega</th>
                          <th>Telefone</th>
                          <th>Status</th>
                          <th>Valor do pedido</th>
                          <th>Método</th>
                          <th>Ação</th>
                        </tr>
                      </thead>

                      <tbody
                        v-for="pedido in meuspedidos"
                        :key="pedido.idpedido"
                      >
                        <tr>
                          <td>{{ pedido.nome }}</td>
                          <td>{{ pedido.nome_cliente }}</td>
                          <td>{{ pedido.endereco_entrega }}</td>
                          <td>{{ pedido.telefone1 }}</td>
                          <td v-if="pedido.id_status == 4">
                            <span class="badge bg-warning text-white">
                              Aguardando
                            </span>
                          </td>
                          <td v-if="pedido.id_status == 8">
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
                          <td>
                            <button
                              type="button"
                              data-toggle="modal"
                              :data-target="`#abrir${pedido.idpedidos}`"
                              class="btn btn-success"
                            >
                              <i class="fa fa-edit"></i>
                            </button>
                          </td>

                          <div
                            class="modal fade"
                            :id="'abrir' + pedido.idpedidos"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Escolha o entregador
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
                                  <form @submit.prevent="handlePedido()">
                                    <h6>
                                      Escolha o Entregador para essa demanda
                                    </h6>

                                    <input
                                      type="text"
                                      id="idpedido"
                                      hidden
                                      v-model="pedido.idpedidos"
                                    />

                                    <input
                                      type="text"
                                      id="endereco"
                                      hidden
                                      v-model="pedido.endereco_entrega"
                                    />

                                    <input
                                      type="text"
                                      id="Endereço"
                                      hidden
                                      v-model="pedido.Endereço"
                                    />

                                    <select
                                      class="form-control"
                                      aria-label="Default select example"
                                      id="idEntregador"
                                    >
                                      <option selected disabled>
                                        Selecione aqui
                                      </option>
                                      <option
                                        v-for="entregador in entregadores"
                                        :key="entregador.id_entregador"
                                        :value="entregador.id_users"
                                      >
                                        {{ entregador.nome }}
                                      </option>
                                    </select>

                                    <div
                                      v-for="entregador in entregadores"
                                      :key="entregador.id_entregador"
                                    >
                                      <input
                                        type="text"
                                        hidden
                                        id="nomeEntregador"
                                        v-model="entregador.nome"
                                      />
                                    </div>

                                    <button
                                      type="submit"
                                      class="btn btn-success mt-3 mr-2"
                                    >
                                      Selecionar
                                    </button>
                                    <button
                                      class="btn btn-secondary mt-3"
                                      type="button"
                                      data-dismiss="modal"
                                    >
                                      Cancelar
                                    </button>
                                  </form>
                                </div>
                                <div class="modal-footer"></div>
                              </div>
                            </div>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-info">
                    <i class="fa fa-list"></i>
                    Pedidos em andamento (Com entregador definido)
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
                          <th>Endereço de entrega</th>
                          <th>Telefone</th>
                          <th>Status</th>
                          <th>Valor do pedido</th>
                          <th>Método</th>
                          <th>Entregador</th>
                        </tr>
                      </thead>

                      <tbody
                        v-for="andamento in andamentos"
                        :key="andamento.idpedidos"
                      >
                        <tr>
                          <td>{{ andamento.nome_cliente }}</td>
                          <td>{{ andamento.endereco_entrega }}</td>
                          <td>{{ andamento.telefone1 }}</td>
                          <td v-if="andamento.id_status == 10">
                            <span class="badge bg-info text-white">
                              Aguardando aceite
                            </span>
                          </td>
                          <td v-if="andamento.id_status == 8">
                            <span class="badge bg-success text-white">
                              Aceito e coletando
                            </span>
                          </td>
                          <td v-if="andamento.id_status == 3">
                            <span class="badge bg-success text-white">
                              Em entrega
                            </span>
                          </td>

                          <td>R$ {{ andamento.valor_pedido }}</td>
                          <td>{{ andamento.metodo_pagamento }}</td>
                          <td>{{ andamento.nome }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-list"></i>
                    Pedidos entregue (Pedidos entregues)
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
                          <th>Endereço de entrega</th>
                          <th>Telefone</th>
                          <th>Status</th>
                          <th>Valor do pedido</th>
                          <th>Método</th>
                          <th>Entregador</th>
                        </tr>
                      </thead>

                      <tbody
                        v-for="entregue in entregues"
                        :key="entregue.idpedidos"
                      >
                        <tr>
                          <td>{{ entregue.nome_cliente }}</td>
                          <td>{{ entregue.endereco_entrega }}</td>
                          <td>{{ entregue.telefone1 }}</td>
                          <td>
                            <span class="badge bg-success text-white">
                              Entregue
                            </span>
                          </td>

                          <td>R$ {{ entregue.valor_pedido }}</td>
                          <td>{{ entregue.metodo_pagamento }}</td>
                          <td>{{ entregue.nome }}</td>
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
      Endereço: "",
      endereco: "",
      opcaoEscolhida: "",
      meuspedidos: [],
      entregadores: [],
      filas: [],
      andamentos: [],
      entregues: [],
    };
  },

  mounted() {
    let token = localStorage.getItem("token");
    let decode = VueJwtDecode.decode(token);
    
    let firstName = decode.nome;
    let lastName = decode.sobrenome;
    let fullname = firstName + " " + lastName;

    document.getElementById("name").innerHTML = fullname;

    if(decode.id_nivel == 2){
      window.location.href = "/#/dashboard-client"
    }


    setTimeout(function () {
      location.reload();
    }, 30000);

    api
      .dadosEntregador()
      .then((resposta) => {
        const telefone = resposta.data.response[0].telefone1;

        const UserID = "ede2dbb2-5f2c-4de1-a9a5-64b6820d5d31";
        const Token = "79837457";

        // número destino - 2 dígitos código do país (Brasil = 55) + 2 dígitos código de área + número do celular
        const destino = `55${telefone}`;

        // mensagem a ser enviada
        let mensagem = `Olá, você tem uma nova entrega. Obrigado!`;

        // Codifica a mensagem - URLEncode
        mensagem = encodeURIComponent(mensagem);

        // Monta a URL para acionar o Gateway
        const URLGateway = `http://web.misterpostman.com.br/gateway.aspx?UserID=${UserID}&Token=${Token}&NroDestino=${destino}&Mensagem=${mensagem}`;

        // Aciona o Gateway - Opção ideal para JavaScript
        fetch(URLGateway)
          .then((response) => response.text())
          .then((data) => console.log(data));

        localStorage.removeItem("id_entregador");
      })
      .catch((err) => console.log(err));

    api
      .pedidosAberto()
      .then((resposta) => {
        this.meuspedidos = resposta.data.response;
      })
      .catch((err) => console.log(err));

    api
      .andamento()
      .then((resposta) => {
        this.andamentos = resposta.data.response;
        console.log(this.andamentos)
      })
      .catch((err) => console.log(err));

    api
      .fila()
      .then((resposta) => {
        this.filas = resposta.data.response;
      })
      .catch((err) => console.log(err));

    api
      .entregue()
      .then((resposta) => {
        this.entregues = resposta.data.response;
      })
      .catch((err) => console.log(err));

    api
      .entregadores()
      .then((resposta) => {
        this.entregadores = resposta.data.response;
      })
      .catch((err) => console.log(err));
  },

  methods: {
    handleOff() {
      localStorage.clear();
      window.location.href = "/";
    },

    async handlePedido() {
      let youStatus = 10;
      let youIdEntregador = document.getElementById("idEntregador").value;
      let youIdPedido = document.getElementById("idpedido").value;
      let youEndereco = document.getElementById("endereco").value;
      let youEndereço = document.getElementById("Endereço").value;

      localStorage.setItem("id_entregador", youIdEntregador);
      localStorage.setItem("endereco", youEndereco);
      localStorage.setItem("Endereço", youEndereço);

      await api.editPedido(youIdEntregador, youIdPedido, youStatus);

    },
  },
};
</script>
