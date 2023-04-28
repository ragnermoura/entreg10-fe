<template id="TheMain2">
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
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3"></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <!-- Divider -->
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
            <div v-for="seuPedido in seusPedidos2" :key="seuPedido.idpedidos">
              <div class="col-lg-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      <i class="fa fa-motorcycle"></i>
                      Seus pedidos
                    </h6>
                  </div>
                  <div
                    class="card-body"
                    style="height: auto; overflow-y: auto;"
                  >
                    <h6>
                      <strong>Endereço:</strong>
                      {{ seuPedido.endereco_entrega }}
                    </h6>
                    <h6>
                      <strong>Cep:</strong>
                      {{ seuPedido.cep }}
                    </h6>
                    <h6>
                      <strong>Nome do cliente:</strong>
                      {{ seuPedido.nome_cliente }}
                    </h6>
                    <h6>
                      <strong>Telefone:</strong>
                      {{ seuPedido.telefone1 }}
                    </h6>
                    <h6>
                      <strong>Valor do pedido:</strong>
                      {{ seuPedido.valor_pedido }}
                    </h6>
                    <h6>
                      <strong>Metodo do pagamento:</strong>
                      {{ seuPedido.metodo_pagamento }}
                    </h6>

                    <button
                      @click="handlePedido(seuPedido.idpedidos)"
                      type="button"
                      class="btn btn-success mt-3"
                    >
                      Entrega feita
                    </button>
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
import VueJwtDecode from 'vue-jwt-decode'
import api from '../../../services/pedido/index'

export default {
  name: 'TheMain2',
  data() {
    return {
      cep: '',
      endereco: '',
      opcaoEscolhida: '',
      meuspedidos: [],
      entregadores: [],
      filas: [],
      andamentos: [],
      entregues: [],
      seusPedidos2: [],
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
      .seusPedidos()
      .then((resposta) => {
        this.seusPedidos2 = resposta.data.response
        console.log(this.seusPedidos2)
      })
      .catch((err) => console.log(err))
  },

  methods: {
    handleOff() {
      localStorage.clear()
      window.location.href = '/'
    },

    async handlePedido(youIdPedido) {
      let youStatus = 5
      let token = localStorage.getItem('token')
      let decode = VueJwtDecode.decode(token)

      let youIdEntregador = decode.id_users


      await api.editPedido2(youIdEntregador, youIdPedido, youStatus)
    },
  },
}
</script>
