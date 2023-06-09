import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
  pedido: (
    youId,
    youNome,
    youCep,
    youEndereco,
    youNumero,
    youTelefone,
    youValor,
    youType,
    youStatus
  ) => {
    http
      .post(
        "/pedido/novo/",
        {
          nome: youNome,
          endereco: youEndereco,
          numero: youNumero,
          cep: youCep,
          telefone: youTelefone,
          valor: youValor,
          metodo: youType,
          id_user: youId,
          status: youStatus,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/#/dashboard-client";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  meusPedidos: () => {
    const token = localStorage.getItem("token");
    let decode = VueJwtDecode.decode(token);
    let id_solicitante = decode.id_users;

    return http.get(`/pedido/${id_solicitante}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  seusPedidos: () => {
    const token = localStorage.getItem("token");
    let decode = VueJwtDecode.decode(token);
    let id_user = decode.id_users;

    return http.get(`/pedido/suas-entregas/${id_user}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },


  pedidosAberto: () => {
    return http.get("/pedido/abertos/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  list: () => {
    return http.get("/segmento/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  entregadores: () => {
    return http.get("/usuarios/entregadores/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  editPedido: (youIdEntregador, youIdPedido, youStatus) => {
    http
      .patch(
        "/pedido/edit/",
        {
          id_status: youStatus,
          id_entregador: youIdEntregador,
          id_pedidos: youIdPedido,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log(response)
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  editPedido2: (youIdEntregador, youIdPedido, youStatus) => {
    http
      .patch(
        "/pedido/edit/",
        {
          id_status: youStatus,
          id_entregador: youIdEntregador,
          id_pedidos: youIdPedido,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/#/dashboard-entregador";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  fila: () => {
    return http.get("/pedido/fila/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  andamento: () => {
    return http.get("/pedido/em-andamento/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  entregue: () => {
    return http.get("/pedido/entregue/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  dadosEntregador: () => {
    const id_user = localStorage.getItem("id_entregador");

    return http.get(`/entregador/sms-entregador/${id_user}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },


 totalHojeAdmin: () => {
    return http.get("/pedido/hoje/admin/1", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  totalSemanaAdmin: () => {
    return http.get("/pedido/semana/admin/1", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  totalMesAdmin: () => {
    return http.get("/pedido/mes/admin/1", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

 totalHojeClient: (id_cliente) => {
    return http.get(`/pedido/hoje/cliente/${id_cliente}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  totalSemanaClient: (id_cliente) => {
    return http.get(`/pedido/semana/cliente/${id_cliente}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  totalMesClient: (id_cliente) => {
    return http.get(`/pedido/mes/cliente/${id_cliente}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },



};
