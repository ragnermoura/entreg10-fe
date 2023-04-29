<template id="Entregadores">
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
        <a class="nav-link" href="/#/dashboard-admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span> Dashboard</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />
      <li class="nav-item active">
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
          <h1 class="h3 mb-4 text-gray-800">Entregadores</h1>
          <div class="row">
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-success">
                    <i class="fas fa-motorcycle"></i>
                    Total de entregadores cadastrados
                  </h6>
                </div>
                <div class="card-body">
                  <h1 class="text-center"><strong>051</strong></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-check"></i>
                    Entregadores Ativos
                  </h6>
                </div>
                <div class="card-body">
                  <h1 class="text-center"><strong>000</strong></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-dange">
                    <i class="fa fa-ban"></i>
                    Entregadores Inativos
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
                    Lista de Entregadores
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
                          <th>Nome</th>
                          <th>Sobrenome</th>
                          <th>E-mail</th>
                          <th>Telefone</th>
                          <th>CPF</th>
                          <th>CNH</th>
                          <th>Marca da Moto</th>
                          <th>Status</th>
                          <th>Ação</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
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
  name: "Entregadores",
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

    // Endereço para obter as coordenadas de latitude e longitude
    const endereco = "Empire State Building";

    // URL da API de Geocodificação do Google Maps
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=SUA_CHAVE_DE_API`;

    // Fazer uma requisição HTTP GET para a API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Extrair as coordenadas de latitude e longitude da resposta JSON
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;

        // Gerar um link para o Google Maps
        const link = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        console.log(link);
      })
      .catch((error) => console.error(error));
  },

  methods: {
    handleOff() {
      localStorage.clear();
      window.location.href = "/";
    },

    async handlePedido() {
      let youStatus = 4;
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
